(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{946:function(e,t,n){"use strict";n.r(t),n.d(t,"sc_status_grid_standard",(function(){return E}));var a=n(13),i=n(15),l=n(37),r=(n(135),n(63)),s=n(72),o=function(){var e,t=new URLSearchParams(window.location.search),n=t.get("isEnabled"),a=t.get("latestValue"),l=t.get("numDataStreams"),r=t.get("showName"),o=t.get("showValue"),u=t.get("showUnit"),d=t.get("isEditing"),c=function(e){return null==e||"null"===e||"undefined"===e?null:Object(s.a)(e)?Number.parseInt(e,10):e}(t.get("threshold")),f=t.get("showIcon");e=null==a||"null"===a||"undefined"===a?null:Object(s.a)(a)?Number.parseInt(a,10):a;var g,w=l&&Object(s.a)(l)?Number.parseInt(l,10):1,b="false"!==n,m="false"!==d,h="false"!==r,p="false"!==o,y="false"!==u,E="false"!==f;return null!=c&&(g={comparisonOperator:i.a.EQUAL,color:"red",value:c,icon:E?i.e.NORMAL:void 0}),{threshold:g,latestValue:e,numDataStreams:w,isEnabled:b,labelsConfig:{showName:h,showValue:p,showUnit:y},isEditing:m}}(),u=o.threshold,d=o.latestValue,c=o.numDataStreams,f=o.isEnabled,g=o.labelsConfig,w=o.isEditing,b=new Date(1998,0,0),m=new Date(2e3,0,1),h="string"==typeof d?l.b.STRING:l.b.NUMBER,p=new Array(3).fill(null).map((function(e,t){return{x:b.getTime()+r.f*(t+1),y:2===t&&null!=d?d:0+100*(t+1)}})),y=new Array(c).fill(null).map((function(e,t){return{id:t.toString(),data:0===t&&null!=d?p:[],color:"black",unit:"unit",name:"Data "+(t+1),dataType:h,resolution:0}})),E=function(){function e(e){Object(a.l)(this,e)}return e.prototype.render=function(){var e=u?{y:[u]}:void 0,t=f?{yMin:0,yMax:5e3,duration:r.e}:{start:b,end:m,yMin:0,yMax:5e3};return Object(a.j)("sc-status-grid",{widgetId:"test-widget",labelsConfig:g,annotations:e,dataStreams:y,viewport:t,isEditing:w})},e}()}}]);