import { Component, h, Prop, State, Watch } from '@stencil/core';
import { DataStream, MessageOverrides, MinimalViewPortConfig, TableColumn } from '../../utils/dataTypes';
import { isThreshold } from '../charts/common/annotations/utils';
import { Trend } from '../charts/common/trends/types';
import { Annotations, ChartConfig, Threshold } from '../charts/common/types';
import { constructTableData, Row } from './constructTableData';
import { viewportEndDate, viewportStartDate } from '../../utils/viewPort';
import { isMinimalStaticViewport } from '../../utils/predicates';
import { parseDuration } from '../../utils/time';
import { webGLRenderer } from '../sc-webgl-context/webglContext';

const MSG =
  'This visualization displays only live data. Choose a live time frame to display data in this visualization.';

@Component({
  tag: 'sc-table',
  shadow: false,
})
export class ScTable implements ChartConfig {
  @Prop() viewport: MinimalViewPortConfig;
  @Prop() widgetId!: string;
  @Prop() dataStreams!: DataStream[];
  @Prop() annotations: Annotations;
  @Prop() trends: Trend[];
  @Prop() liveModeOnlyMessage: string = MSG;
  @Prop() messageOverrides: MessageOverrides = {};

  /** Table column values */
  @Prop() tableColumns: TableColumn[];

  /** Active Viewport */
  @State() start: Date = viewportStartDate(this.viewport);
  @State() end: Date = viewportEndDate(this.viewport);
  @State() duration?: number = !isMinimalStaticViewport(this.viewport)
    ? parseDuration(this.viewport.duration)
    : undefined;

  @Watch('viewport')
  onViewPortChange(newViewPort: MinimalViewPortConfig) {
    this.onUpdate({
      ...newViewPort,
      duration: !isMinimalStaticViewport(newViewPort) ? parseDuration(newViewPort.duration) : undefined,
      start: viewportStartDate(this.viewport),
      end: viewportEndDate(this.viewport),
    });
  }

  onUpdate = ({ start, end, duration }: { start: Date; end: Date; duration?: number }) => {
    // Update active viewport
    this.start = start;
    this.end = end;
    this.duration = duration;
  };

  componentDidLoad() {
    webGLRenderer.addChartScene({
      manager: {
        id: this.widgetId,
        viewportGroup: this.viewport.group,
        updateViewPort: this.onUpdate,
      },
      duration: this.duration,
    });
  }

  disconnectedCallback() {
    // necessary to make sure that the allocated memory is released, and nothing is incorrectly rendered.
    webGLRenderer.removeChartScene(this.widgetId);
  }

  getThresholds = (): Threshold[] =>
    this.annotations && this.annotations.y ? this.annotations.y.filter(isThreshold) : [];

  render() {
    const rows: Row[] = constructTableData({
      tableColumns: this.tableColumns,
      dataStreams: this.dataStreams,
      thresholds: this.getThresholds(),
      date: this.end,
    });
    const isEnabled = this.duration != null;

    return (
      <sc-table-base
        columns={this.tableColumns}
        rows={rows}
        isEnabled={isEnabled}
        liveModeOnlyMessage={this.liveModeOnlyMessage}
        messageOverrides={this.messageOverrides}
      />
    );
  }
}
