(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.VGauge = {}));
}(this, function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var gauge_min = createCommonjsModule(function (module) {
	(function(){var t,i,e,s,n,o,a,h,r,l,p,c,u,d=[].slice,g={}.hasOwnProperty,m=function(t,i){function e(){this.constructor=t;}for(var s in i){ g.call(i,s)&&(t[s]=i[s]); }return e.prototype=i.prototype,t.prototype=new e,t.__super__=i.prototype,t};!function(){var t,i,e,s,n,o,a;for(a=["ms","moz","webkit","o"],e=0,n=a.length;e<n&&(o=a[e],!window.requestAnimationFrame);e++){ window.requestAnimationFrame=window[o+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"]; }t=null,s=0,i={},requestAnimationFrame?window.cancelAnimationFrame||(t=window.requestAnimationFrame,window.requestAnimationFrame=function(e,n){var o;return o=++s,t(function(){if(!i[o]){ return e() }},n),o},window.cancelAnimationFrame=function(t){return i[t]=!0}):(window.requestAnimationFrame=function(t,i){var e,s,n,o;return e=(new Date).getTime(),o=Math.max(0,16-(e-n)),s=window.setTimeout(function(){return t(e+o)},o),n=e+o,s},window.cancelAnimationFrame=function(t){return clearTimeout(t)});}(),u=function(t){var i,e;for(i=Math.floor(t/3600),e=Math.floor((t-3600*i)/60),t-=3600*i+60*e,t+="",e+="";e.length<2;){ e="0"+e; }for(;t.length<2;){ t="0"+t; }return (i=i?i+":":"")+e+":"+t},p=function(){var t,i,e;return i=1<=arguments.length?d.call(arguments,0):[],e=i[0],t=i[1],r(e.toFixed(t))},c=function(t,i){var e,s,n;s={};for(e in t){ g.call(t,e)&&(n=t[e],s[e]=n); }for(e in i){ g.call(i,e)&&(n=i[e],s[e]=n); }return s},r=function(t){var i,e,s,n;for(t+="",e=t.split("."),s=e[0],n="",e.length>1&&(n="."+e[1]),i=/(\d+)(\d{3})/;i.test(s);){ s=s.replace(i,"$1,$2"); }return s+n},l=function(t){return "#"===t.charAt(0)?t.substring(1,7):t},h=function(){function t(t,i){null==t&&(t=!0),this.clear=null==i||i,t&&AnimationUpdater.add(this);}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var i;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=this.value-this.displayedValue,Math.abs(i/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+i/this.animationSpeed,this.render(),!0)},t}(),e=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return m(i,t),i.prototype.displayScale=1,i.prototype.forceUpdate=!0,i.prototype.setTextField=function(t,i){return this.textField=t instanceof a?t:new a(t,i)},i.prototype.setMinValue=function(t,i){var e,s,n,o,a;if(this.minValue=t,null==i&&(i=!0),i){for(this.displayedValue=this.minValue,o=this.gp||[],a=[],s=0,n=o.length;s<n;s++){ e=o[s],a.push(e.displayedValue=this.minValue); }return a}},i.prototype.setOptions=function(t){return null==t&&(t=null),this.options=c(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.options.angle=.5),this.configDisplayScale(),this},i.prototype.configDisplayScale=function(){var t,i,e,s,n;return s=this.displayScale,!1===this.options.highDpiSupport?delete this.displayScale:(i=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=i/t),this.displayScale!==s&&(n=this.canvas.G__width||this.canvas.width,e=this.canvas.G__height||this.canvas.height,this.canvas.width=n*this.displayScale,this.canvas.height=e*this.displayScale,this.canvas.style.width=n+"px",this.canvas.style.height=e+"px",this.canvas.G__width=n,this.canvas.G__height=e),this},i.prototype.parseValue=function(t){return t=parseFloat(t)||Number(t),isFinite(t)?t:0},i}(h),a=function(){function t(t,i){this.el=t,this.fractionDigits=i;}return t.prototype.render=function(t){return this.el.innerHTML=p(t.displayedValue,this.fractionDigits)},t}(),t=function(t){function i(t,e){if(this.elem=t,this.text=null!=e&&e,i.__super__.constructor.call(this),void 0===this.elem){ throw new Error("The element isn't defined."); }this.value=1*this.elem.innerHTML,this.text&&(this.value=0);}return m(i,t),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.setVal=function(t){return this.value=1*t},i.prototype.render=function(){var t;return t=this.text?u(this.displayedValue.toFixed(0)):r(p(this.displayedValue)),this.elem.innerHTML=t},i}(h),o=function(t){function i(t){if(this.gauge=t,void 0===this.gauge){ throw new Error("The element isn't defined."); }this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,i.__super__.constructor.call(this,!1,!1),this.setOptions();}return m(i,t),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.options={strokeWidth:.035,length:.1,color:"#000000",iconPath:null,iconScale:1,iconAngle:0},i.prototype.img=null,i.prototype.setOptions=function(t){if(null==t&&(t=null),this.options=c(this.options,t),this.length=2*this.gauge.radius*this.gauge.options.radiusScale*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle,this.options.iconPath){ return this.img=new Image,this.img.src=this.options.iconPath }},i.prototype.render=function(){var t,i,e,s,n,o,a,h,r;if(t=this.gauge.getAngle.call(this,this.displayedValue),h=Math.round(this.length*Math.cos(t)),r=Math.round(this.length*Math.sin(t)),o=Math.round(this.strokeWidth*Math.cos(t-Math.PI/2)),a=Math.round(this.strokeWidth*Math.sin(t-Math.PI/2)),i=Math.round(this.strokeWidth*Math.cos(t+Math.PI/2)),e=Math.round(this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.beginPath(),this.ctx.fillStyle=this.options.color,this.ctx.arc(0,0,this.strokeWidth,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(o,a),this.ctx.lineTo(h,r),this.ctx.lineTo(i,e),this.ctx.fill(),this.img){ return s=Math.round(this.img.width*this.options.iconScale),n=Math.round(this.img.height*this.options.iconScale),this.ctx.save(),this.ctx.translate(h,r),this.ctx.rotate(t+Math.PI/180*(90+this.options.iconAngle)),this.ctx.drawImage(this.img,-s/2,-n/2,s,n),this.ctx.restore() }},i}(h),n=function(t){function i(t){var e,s;this.canvas=t,i.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),e=this.canvas.clientHeight,s=this.canvas.clientWidth,this.canvas.height=e,this.canvas.width=s,this.gp=[new o(this)],this.setOptions();}return m(i,t),i.prototype.elem=null,i.prototype.value=[20],i.prototype.maxValue=80,i.prototype.minValue=0,i.prototype.displayedAngle=0,i.prototype.displayedValue=0,i.prototype.lineWidth=40,i.prototype.paddingTop=.1,i.prototype.paddingBottom=.1,i.prototype.percentColors=null,i.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035,iconScale:1},angle:.15,lineWidth:.44,radiusScale:1,fontSize:40,limitMax:!1,limitMin:!1},i.prototype.setOptions=function(t){var e,s,n,o,a;for(null==t&&(t=null),i.__super__.setOptions.call(this,t),this.configPercentColors(),this.extraPadding=0,this.options.angle<0&&(o=Math.PI*(1+this.options.angle),this.extraPadding=Math.sin(o)),this.availableHeight=this.canvas.height*(1-this.paddingTop-this.paddingBottom),this.lineWidth=this.availableHeight*this.options.lineWidth,this.radius=(this.availableHeight-this.lineWidth/2)/(1+this.extraPadding),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),a=this.gp,s=0,n=a.length;s<n;s++){ e=a[s],e.setOptions(this.options.pointer),e.render(); }return this.render(),this},i.prototype.configPercentColors=function(){var t,i,e,s,n,o,a;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,o=[],e=s=0,n=this.options.percentColors.length-1;0<=n?s<=n:s>=n;e=0<=n?++s:--s){ a=parseInt(l(this.options.percentColors[e][1]).substring(0,2),16),i=parseInt(l(this.options.percentColors[e][1]).substring(2,4),16),t=parseInt(l(this.options.percentColors[e][1]).substring(4,6),16),o.push(this.percentColors[e]={pct:this.options.percentColors[e][0],color:{r:a,g:i,b:t}}); }return o}},i.prototype.set=function(t){var i,e,s,n,a,h,r,l,p;for(t instanceof Array||(t=[t]),e=s=0,r=t.length-1;0<=r?s<=r:s>=r;e=0<=r?++s:--s){ t[e]=this.parseValue(t[e]); }if(t.length>this.gp.length){ for(e=n=0,l=t.length-this.gp.length;0<=l?n<l:n>l;e=0<=l?++n:--n){ i=new o(this),i.setOptions(this.options.pointer),this.gp.push(i); } }else { t.length<this.gp.length&&(this.gp=this.gp.slice(this.gp.length-t.length)); }for(e=0,a=0,h=t.length;a<h;a++){ p=t[a],p>this.maxValue?this.options.limitMax?p=this.maxValue:this.maxValue=p+1:p<this.minValue&&(this.options.limitMin?p=this.minValue:this.minValue=p-1),this.gp[e].value=p,this.gp[e++].setOptions({minValue:this.minValue,maxValue:this.maxValue,angle:this.options.angle}); }return this.value=Math.max(Math.min(t[t.length-1],this.maxValue),this.minValue),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},i.prototype.getAngle=function(t){return (1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},i.prototype.getColorForPercentage=function(t,i){var e,s,n,o,a,h,r;if(0===t){ e=this.percentColors[0].color; }else { for(e=this.percentColors[this.percentColors.length-1].color,n=o=0,h=this.percentColors.length-1;0<=h?o<=h:o>=h;n=0<=h?++o:--o){ if(t<=this.percentColors[n].pct){!0===i?(r=this.percentColors[n-1]||this.percentColors[0],s=this.percentColors[n],a=(t-r.pct)/(s.pct-r.pct),e={r:Math.floor(r.color.r*(1-a)+s.color.r*a),g:Math.floor(r.color.g*(1-a)+s.color.g*a),b:Math.floor(r.color.b*(1-a)+s.color.b*a)}):e=this.percentColors[n].color;break} } }return "rgb("+[e.r,e.g,e.b].join(",")+")"},i.prototype.getColorForValue=function(t,i){var e;return e=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(e,i)},i.prototype.renderStaticLabels=function(t,i,e,s){var n,o,a,h,r,l,c,u,d,g;for(this.ctx.save(),this.ctx.translate(i,e),n=t.font||"10px Times",l=/\d+\.?\d?/,r=n.match(l)[0],u=n.slice(r.length),o=parseFloat(r)*this.displayScale,this.ctx.font=o+u,this.ctx.fillStyle=t.color||"#000000",this.ctx.textBaseline="bottom",this.ctx.textAlign="center",c=t.labels,a=0,h=c.length;a<h;a++){ g=c[a],void 0!==g.label?(!this.options.limitMin||g>=this.minValue)&&(!this.options.limitMax||g<=this.maxValue)&&(n=g.font||t.font,r=n.match(l)[0],u=n.slice(r.length),o=parseFloat(r)*this.displayScale,this.ctx.font=o+u,d=this.getAngle(g.label)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(p(g.label,t.fractionDigits),0,-s-this.lineWidth/2),this.ctx.rotate(-d)):(!this.options.limitMin||g>=this.minValue)&&(!this.options.limitMax||g<=this.maxValue)&&(d=this.getAngle(g)-3*Math.PI/2,this.ctx.rotate(d),this.ctx.fillText(p(g,t.fractionDigits),0,-s-this.lineWidth/2),this.ctx.rotate(-d)); }return this.ctx.restore()},i.prototype.renderTicks=function(t,i,e,s){var n,o,a,h,r,l,p,c,u,d,g,m,x,f,v,y,V,w,S,M,C;if(t!=={}){for(l=t.divisions||0,S=t.subDivisions||0,a=t.divColor||"#fff",v=t.subColor||"#fff",h=t.divLength||.7,V=t.subLength||.2,u=parseFloat(this.maxValue)-parseFloat(this.minValue),d=parseFloat(u)/parseFloat(t.divisions),y=parseFloat(d)/parseFloat(t.subDivisions),n=parseFloat(this.minValue),o=0+y,c=u/400,r=c*(t.divWidth||1),w=c*(t.subWidth||1),m=[],M=p=0,g=l+1;p<g;M=p+=1){ this.ctx.lineWidth=this.lineWidth*h,x=this.lineWidth/2*(1-h),C=this.radius*this.options.radiusScale+x,this.ctx.strokeStyle=a,this.ctx.beginPath(),this.ctx.arc(0,0,C,this.getAngle(n-r),this.getAngle(n+r),!1),this.ctx.stroke(),o=n+y,n+=d,M!==t.divisions&&S>0?m.push(function(){var t,i,e;for(e=[],f=t=0,i=S-1;t<i;f=t+=1){ this.ctx.lineWidth=this.lineWidth*V,x=this.lineWidth/2*(1-V),C=this.radius*this.options.radiusScale+x,this.ctx.strokeStyle=v,this.ctx.beginPath(),this.ctx.arc(0,0,C,this.getAngle(o-w),this.getAngle(o+w),!1),this.ctx.stroke(),e.push(o+=y); }return e}.call(this)):m.push(void 0); }return m}},i.prototype.render=function(){var t,i,e,s,n,o,a,h,r,l,p,c,u,d,g,m,x;if(m=this.canvas.width/2,s=this.canvas.height*this.paddingTop+this.availableHeight-(this.radius+this.lineWidth/2)*this.extraPadding,t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",p=this.radius*this.options.radiusScale,this.options.staticLabels&&this.renderStaticLabels(this.options.staticLabels,m,s,p),this.options.staticZones){ for(this.ctx.save(),this.ctx.translate(m,s),this.ctx.lineWidth=this.lineWidth,c=this.options.staticZones,n=0,a=c.length;n<a;n++){ x=c[n],l=x.min,this.options.limitMin&&l<this.minValue&&(l=this.minValue),r=x.max,this.options.limitMax&&r>this.maxValue&&(r=this.maxValue),g=this.radius*this.options.radiusScale,x.height&&(this.ctx.lineWidth=this.lineWidth*x.height,d=this.lineWidth/2*(x.offset||1-x.height),g=this.radius*this.options.radiusScale+d),this.ctx.strokeStyle=x.strokeStyle,this.ctx.beginPath(),this.ctx.arc(0,0,g,this.getAngle(l),this.getAngle(r),!1),this.ctx.stroke(); } }else { void 0!==this.options.customFillStyle?i=this.options.customFillStyle(this):null!==this.percentColors?i=this.getColorForValue(this.displayedValue,this.options.generateGradient):void 0!==this.options.colorStop?(i=0===this.options.gradientType?this.ctx.createRadialGradient(m,s,9,m,s,70):this.ctx.createLinearGradient(0,0,m,0),i.addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop)):i=this.options.colorStart,this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(m,s,p,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(m,s,p,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),this.ctx.save(),this.ctx.translate(m,s); }for(this.options.renderTicks&&this.renderTicks(this.options.renderTicks,m,s,p),this.ctx.restore(),this.ctx.translate(m,s),u=this.gp,o=0,h=u.length;o<h;o++){ e=u[o],e.update(!0); }return this.ctx.translate(-m,-s)},i}(e),i=function(t){function i(t){this.canvas=t,i.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render();}return m(i,t),i.prototype.lineWidth=15,i.prototype.displayedValue=0,i.prototype.value=33,i.prototype.maxValue=80,i.prototype.minValue=0,i.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35,radiusScale:1},i.prototype.getAngle=function(t){return (1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},i.prototype.setOptions=function(t){return null==t&&(t=null),i.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.options.radiusScale*(this.canvas.height/2-this.lineWidth/2),this},i.prototype.set=function(t){return this.value=this.parseValue(t),this.value>this.maxValue?this.options.limitMax?this.value=this.maxValue:this.maxValue=this.value:this.value<this.minValue&&(this.options.limitMin?this.value=this.minValue:this.minValue=this.value),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},i.prototype.render=function(){var t,i,e,s;return t=this.getAngle(this.displayedValue),s=this.canvas.width/2,e=this.canvas.height/2,this.textField&&this.textField.render(this),i=this.ctx.createRadialGradient(s,e,39,s,e,70),i.addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop),this.radius-this.lineWidth/2,this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(s,e,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(s,e,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},i}(e),s=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return m(i,t),i.prototype.strokeGradient=function(t,i,e,s){var n;return n=this.ctx.createRadialGradient(t,i,e,t,i,s),n.addColorStop(0,this.options.shadowColor),n.addColorStop(.12,this.options._orgStrokeColor),n.addColorStop(.88,this.options._orgStrokeColor),n.addColorStop(1,this.options.shadowColor),n},i.prototype.setOptions=function(t){var e,s,n,o;return null==t&&(t=null),i.__super__.setOptions.call(this,t),o=this.canvas.width/2,e=this.canvas.height/2,s=this.radius-this.lineWidth/2,n=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(o,e,s,n),this},i}(i),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){var i,e,s,n;for(n=[],e=0,s=t.length;e<s;e++){ i=t[e],n.push(AnimationUpdater.elements.push(i)); }return n},add:function(t){return AnimationUpdater.elements.push(t)},run:function(t){var i,e,s,n,o;if(null==t&&(t=!1),isFinite(parseFloat(t))||!0===t){for(e=!0,o=AnimationUpdater.elements,s=0,n=o.length;s<n;s++){ i=o[s],i.update(!0===t)&&(e=!1); }return AnimationUpdater.animId=e?null:requestAnimationFrame(AnimationUpdater.run)}if(!1===t){ return !0===AnimationUpdater.animId&&cancelAnimationFrame(AnimationUpdater.animId),AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run) }}},"function"==typeof window.define&&null!=window.define.amd?undefined(function(){return {Gauge:n,Donut:s,BaseDonut:i,TextRenderer:a}}):null!=module.exports?module.exports={Gauge:n,Donut:s,BaseDonut:i,TextRenderer:a}:(window.Gauge=n,window.Donut=s,window.BaseDonut=i,window.TextRenderer=a);}).call(commonjsGlobal);
	});
	var gauge_min_1 = gauge_min.Gauge;
	var gauge_min_2 = gauge_min.Donut;
	var gauge_min_3 = gauge_min.BaseDonut;
	var gauge_min_4 = gauge_min.TextRenderer;

	//
	var script = {
	  name: "VGauge",
	  props: {
	    unit: {
	      type: String,
	      default: ""
	    },
	    height: {
	      type: String,
	      default: "150px"
	    },
	    decimalPlace: {
	      type: Number,
	      default: 0
	    },
	    gaugeValueClass: {
	      type: String,
	      default: ""
	    },
	    top: {
	      type: Boolean,
	      default: false
	    },
	    maxValue: {
	      type: Number,
	      default: 100
	    },
	    minValue: {
	      type: Number,
	      default: 0
	    },
	    options: {
	      type: Object,
	      default: function() {
	        return {
	          angle: 0.15,
	          lineWidth: 0.44,
	          radiusScale: 1,
	          pointer: {
	            length: 0.6,
	            strokeWidth: 0.035,
	            color: "#000000"
	          },
	          limitMax: false,
	          limitMin: false,
	          colorStart: "#6FADCF",
	          colorStop: "#8FC0DA",
	          strokeColor: "#E0E0E0",
	          generateGradient: true,
	          highDpiSupport: true
	        };
	      }
	    },
	    animationSpeed: {
	      type: Number,
	      default: 10
	    },
	    initialValue: {
	      type: Number,
	      default: 0
	    },
	    value: {
	      type: Number,
	      default: 50
	    },
	    donut: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      gauge: null
	    };
	  },
	  mounted: function mounted() {
	    this.initializeGauge();
	  },
	  watch: {
	    value: function(newVal) {
	      this.gauge.set(newVal);
	    }
	  },
	  methods: {
	    initializeGauge: function initializeGauge() {
	      this.gauge = this.donut
	        ? new gauge_min_2(this.$refs.gauge)
	        : new gauge_min_1(this.$refs.gauge);
	      this.gauge.maxValue = this.maxValue;
	      this.gauge.setMinValue(this.minValue);
	      this.gauge.animationSpeed = this.animationSpeed;
	      this.gauge.setOptions(this.options);
	      this.gauge.set(this.value);
	    }
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
	/* server only */
	, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	  if (typeof shadowMode !== 'boolean') {
	    createInjectorSSR = createInjector;
	    createInjector = shadowMode;
	    shadowMode = false;
	  } // Vue.extend constructor export interop.


	  var options = typeof script === 'function' ? script.options : script; // render functions

	  if (template && template.render) {
	    options.render = template.render;
	    options.staticRenderFns = template.staticRenderFns;
	    options._compiled = true; // functional template

	    if (isFunctionalTemplate) {
	      options.functional = true;
	    }
	  } // scopedId


	  if (scopeId) {
	    options._scopeId = scopeId;
	  }

	  var hook;

	  if (moduleIdentifier) {
	    // server build
	    hook = function hook(context) {
	      // 2.3 injection
	      context = context || // cached call
	      this.$vnode && this.$vnode.ssrContext || // stateful
	      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
	      // 2.2 with runInNewContext: true

	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__;
	      } // inject component styles


	      if (style) {
	        style.call(this, createInjectorSSR(context));
	      } // register component module identifier for async chunk inference


	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier);
	      }
	    }; // used by ssr in case component is cached and beforeCreate
	    // never gets called


	    options._ssrRegister = hook;
	  } else if (style) {
	    hook = shadowMode ? function () {
	      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
	    } : function (context) {
	      style.call(this, createInjector(context));
	    };
	  }

	  if (hook) {
	    if (options.functional) {
	      // register for functional component in vue file
	      var originalRender = options.render;

	      options.render = function renderWithStyleInjection(h, context) {
	        hook.call(context);
	        return originalRender(h, context);
	      };
	    } else {
	      // inject component registration as beforeCreate hook
	      var existing = options.beforeCreate;
	      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	    }
	  }

	  return script;
	}

	var normalizeComponent_1 = normalizeComponent;

	/* script */
	var __vue_script__ = script;

	/* template */
	var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{ref:"gauge",attrs:{"height":_vm.height}})};
	var __vue_staticRenderFns__ = [];

	  /* style */
	  var __vue_inject_styles__ = undefined;
	  /* scoped */
	  var __vue_scope_id__ = undefined;
	  /* module identifier */
	  var __vue_module_identifier__ = undefined;
	  /* functional template */
	  var __vue_is_functional_template__ = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  

	  
	  var component = normalizeComponent_1(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    undefined,
	    undefined
	  );

	// Import vue component

	// install function executed by Vue.use()
	function install(Vue) {
	  if (install.installed) { return; }
	  install.installed = true;
	  Vue.component('VGauge', component);
	}

	// Create module definition for Vue.use()
	var plugin = {
	  install: install,
	};

	// To auto-install when vue is found
	/* global window global */
	var GlobalVue = null;
	if (typeof window !== 'undefined') {
	  GlobalVue = window.Vue;
	} else if (typeof global !== 'undefined') {
	  GlobalVue = global.Vue;
	}
	if (GlobalVue) {
	  GlobalVue.use(plugin);
	}

	// Inject install function into component - allows component
	// to be registered via Vue.use() as well as Vue.component()
	component.install = install;

	// It's possible to expose named exports when writing components that can
	// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
	// export const RollupDemoDirective = component;

	exports.default = component;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
