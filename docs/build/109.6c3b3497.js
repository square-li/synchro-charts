(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{994:function(t,e,n){"use strict";n.r(e),n.d(e,"status_timeline_fast_viewport",(function(){return d}));var i=n(13),a=n(37),r=(n(135),n(63)),s=new Date(1999,9,0,0,0),o=new Date(2e3,2,0,0,10),c=Array.from({length:50},(function(t,e){return{x:new Date(2e3,0,e,0,0).getTime(),y:2500}})),d=function(){function t(t){var e=this;Object(i.l)(this,t),this.dataStreams=[],this.colorIndex=0,this.start=s,this.end=o,this.idx=0,this.timeRange=[[new Date(2e3,2,0,0,0),new Date(2e3,3,0,0,0)],[new Date(2010,4,0,0,0),new Date(2020,5,0,0,0)],[new Date(2030,6,0,0,0),new Date(2040,7,0,0,0)],[s,o]],this.changeViewport=function(){var t=e.timeRange[e.idx%e.timeRange.length],n=t[0],i=t[1];e.start=n,e.end=i,e.idx+=1}}return t.prototype.render=function(){var t;return Object(i.j)("div",null,Object(i.j)("button",{id:"change-viewport",onClick:this.changeViewport},"Change Viewport"),Object(i.j)("br",null),Object(i.j)("br",null),Object(i.j)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(i.j)("sc-status-timeline",{alarms:{expires:r.b},dataStreams:[{id:"test",color:"#264653",name:"test stream",aggregates:(t={},t[r.b]=c,t),data:[],resolution:r.b,dataType:a.b.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewport:{yMin:0,yMax:5e3,start:this.start,end:this.end}}),Object(i.j)("sc-webgl-context",null)))},t}()}}]);