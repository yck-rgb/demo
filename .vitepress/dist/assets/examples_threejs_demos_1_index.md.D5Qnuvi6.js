import{W as N,S as z,P as D,A as W,O as L,B as G,M as m,a as I,b as q,c as Q,d as J,C as $,e as K,F as X}from"./chunks/OrbitControls.DaTzZhGl.js";import{m as Y,a as Z,e as V,p as k,q as j,aw as tt,ai as et,V as A,t as x,u as it}from"./chunks/framework.BaQPFwRT.js";var y=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return t},Out:function(t){return t},InOut:function(t){return t}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-y.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?y.Bounce.In(t*2)*.5:y.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),w=function(){return performance.now()},F=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(i){return e._tweens[i]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,i){e===void 0&&(e=w()),i===void 0&&(i=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<r.length;n++){var s=this._tweens[r[n]],a=!i;s&&s.update(e,a)===!1&&!i&&delete this._tweens[r[n]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),v={Linear:function(t,e){var i=t.length-1,r=i*e,n=Math.floor(r),s=v.Utils.Linear;return e<0?s(t[0],t[1],r):e>1?s(t[i],t[i-1],i-r):s(t[n],t[n+1>i?i:n+1],r-n)},Bezier:function(t,e){for(var i=0,r=t.length-1,n=Math.pow,s=v.Utils.Bernstein,a=0;a<=r;a++)i+=n(1-e,r-a)*n(e,a)*t[a]*s(r,a);return i},CatmullRom:function(t,e){var i=t.length-1,r=i*e,n=Math.floor(r),s=v.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(n=Math.floor(r=i*(1+e))),s(t[(n-1+i)%i],t[n],t[(n+1)%i],t[(n+2)%i],r-n)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[i]-(s(t[i],t[i],t[i-1],t[i-1],r-i)-t[i]):s(t[n?n-1:0],t[n],t[i<n+1?i:n+1],t[i<n+2?i:n+2],r-n)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=v.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var r=e;r>1;r--)i*=r;return t[e]=i,i}}(),CatmullRom:function(t,e,i,r,n){var s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}}},rt=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),P=new F,nt=function(){function t(e,i){i===void 0&&(i=P),this._object=e,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=y.Linear.None,this._interpolationFunction=v.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=rt.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,i){if(e===void 0&&(e=w()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var r in this._valuesStartRepeat)this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var s in this._valuesEnd)n[s]=this._valuesEnd[s];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,i,r,n,s){for(var a in r){var o=e[a],l=Array.isArray(o),f=l?"array":typeof o,h=!l&&Array.isArray(r[a]);if(!(f==="undefined"||f==="function")){if(h){var u=r[a];if(u.length===0)continue;for(var p=[o],_=0,g=u.length;_<g;_+=1){var E=this._handleRelativeValue(o,u[_]);if(isNaN(E)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}p.push(E)}h&&(r[a]=p)}if((f==="object"||l)&&o&&!h){i[a]=l?[]:{};var b=o;for(var d in b)i[a][d]=b[d];n[a]=l?[]:{};var u=r[a];if(!this._isDynamic){var C={};for(var d in u)C[d]=u[d];r[a]=u=C}this._setupProperties(b,i[a],u,n[a],s)}else(typeof i[a]>"u"||s)&&(i[a]=o),l||(i[a]*=1),h?n[a]=r[a].slice().reverse():n[a]=i[a]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=w()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=w()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,i=this._chainedTweens.length;e<i;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=P),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=y.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=v.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,i){var r;if(e===void 0&&(e=w()),i===void 0&&(i=!0),this._isPaused)return!0;var n=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>n)return!1;i&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var s=e-this._startTime,a=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),o=this._duration+this._repeat*a,l=this._calculateElapsedPortion(s,a,o),f=this._easingFunction(l),h=this._calculateCompletionStatus(s,a);if(h==="repeat"&&this._processRepetition(s,a),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),h==="about-to-repeat"&&this._processRepetition(s,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,l),h==="repeat"||h==="about-to-repeat")this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1;else if(h==="completed"){this._isPlaying=!1,this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,p=this._chainedTweens.length;u<p;u++)this._chainedTweens[u].start(this._startTime+this._duration,!1)}return h!=="completed"},t.prototype._calculateElapsedPortion=function(e,i,r){if(this._duration===0||e>r)return 1;var n=e%i,s=Math.min(n/this._duration,1);return s===0&&e!==0&&e%this._duration===0?1:s},t.prototype._calculateCompletionStatus=function(e,i){return this._duration!==0&&e<this._duration?"playing":this._repeat<=0?"completed":e===this._duration?"about-to-repeat":"repeat"},t.prototype._processRepetition=function(e,i){var r=Math.min(Math.trunc((e-this._duration)/i)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=r);for(var n in this._valuesStartRepeat){var s=this._valuesEnd[n];!this._yoyo&&typeof s=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(s)),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}this._yoyo&&(this._reversed=!this._reversed),this._startTime+=i*r},t.prototype._updateProperties=function(e,i,r,n){for(var s in r)if(i[s]!==void 0){var a=i[s]||0,o=r[s],l=Array.isArray(e[s]),f=Array.isArray(o),h=!l&&f;h?e[s]=this._interpolationFunction(o,n):typeof o=="object"&&o?this._updateProperties(e[s],a,o,n):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*n))}},t.prototype._handleRelativeValue=function(e,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?e+parseFloat(i):parseFloat(i)},t.prototype._swapEndStartRepeatValues=function(e){var i=this._valuesStartRepeat[e],r=this._valuesEnd[e];typeof r=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(r):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=i},t}(),c=P;c.getAll.bind(c);c.removeAll.bind(c);c.add.bind(c);c.remove.bind(c);c.update.bind(c);const st=Y({__name:"code-vue",setup(t){const e=Z(null);let i,r,n,s;V(()=>{o()});function a(){const p=new G(40,40,40,10,10,10),_=new m({color:65280}),g=new I(p,_);g.visible=!1;const E=new q(10,26,26),b=new m({color:16776960}),d=new I(E,b);d.visible=!1,console.log(g.geometry.attributes.position),console.log(d.geometry.attributes.position);const C=g.geometry.attributes.position,H=d.geometry.attributes.position,T=new Q,B=new J({color:new $("red")}),U=new K(T,B);n.add(U);const S=new F,R=new nt(C.array,S).to(H.array,2e3).easing(y.Cubic.InOut).onUpdate(O=>{console.log(O),T.setAttribute("position",new X(O,3))}).start();R.repeat(1/0),R.yoyo(!0),M();function M(){S.update(),requestAnimationFrame(()=>{M()})}}function o(){r=e.value,l(),f(),h(),u(),a()}function l(){i=new N({antialias:!0}),i.setPixelRatio(window.devicePixelRatio),i.setSize(r.clientWidth,r.clientHeight),i.setViewport(0,0,r.clientWidth,r.clientHeight),i.setClearAlpha(0),r.appendChild(i.domElement),n=new z,s=new D(30,r.clientWidth/r.clientHeight,.01,1e5),s.position.set(0,0,120)}function f(){n.add(new W(15659263))}function h(){new L(s,i.domElement)}function u(){requestAnimationFrame(u),i.render(n,s)}return(p,_)=>(k(),j("div",{class:"map",ref_key:"dom",ref:e},null,512))}}),at=tt(st,[["__scopeId","data-v-e9d3ec0a"]]),ot=`<template>\r
  <div class="map" ref="dom"></div>\r
</template>\r
\r
<script setup lang="ts">\r
import * as THREE from "three";\r
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";\r
import * as TWEEN from "@tweenjs/tween.js";\r
\r
const dom = ref(null);\r
let renderer: any, el: any, scene: any, camera: any, controls: any;\r
onMounted(() => {\r
  init();\r
});\r
\r
function createPlane() {\r
  const geometry = new THREE.BoxGeometry(40, 40, 40, 10, 10, 10);\r
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\r
  const cube = new THREE.Mesh(geometry, material);\r
  cube.visible = false;\r
\r
  const geometry2 = new THREE.SphereGeometry(10, 26, 26);\r
  const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });\r
  const sphere2 = new THREE.Mesh(geometry2, material2);\r
  sphere2.visible = false;\r
\r
  console.log(cube.geometry.attributes.position);\r
  console.log(sphere2.geometry.attributes.position);\r
  const positions1 = cube.geometry.attributes.position;\r
  const positions2 = sphere2.geometry.attributes.position;\r
\r
  const geometry3 = new THREE.BufferGeometry();\r
  // geometry3.setAttribute('position', new THREE.Float32BufferAttribute(positions2.array, 3));\r
\r
  const material3 = new THREE.PointsMaterial({ color: new THREE.Color("red") });\r
\r
  const points3 = new THREE.Points(geometry3, material3);\r
  scene.add(points3);\r
\r
  const group1 = new TWEEN.Group();\r
  const tween1 = new TWEEN.Tween(positions1.array, group1) // 创建一个修改“坐标”的新 tween。\r
    .to(positions2.array, 2000) // 在 1 秒内移动到 (300, 200)。\r
    .easing(TWEEN.Easing.Cubic.InOut) // 使用缓动函数使动画流畅。\r
    .onUpdate((res) => {\r
      console.log(res);\r
      geometry3.setAttribute(\r
        "position",\r
        new THREE.Float32BufferAttribute(res, 3)\r
      );\r
    })\r
    .start();\r
  tween1.repeat(Infinity); //重复次数\r
  tween1.yoyo(true);\r
  // tween1.delay(100)//第一次等1s\r
  loop();\r
  function loop() {\r
    group1.update();\r
    requestAnimationFrame(() => {\r
      loop();\r
    });\r
  }\r
}\r
\r
function init() {\r
  el = dom.value;\r
  initThree(); //初始化渲染器 相机\r
  initLight(); //初始胡灯光\r
  initControls(); //初始化控制器\r
  animation(); //死循环渲染\r
  createPlane(); //创建立方体\r
}\r
function initThree() {\r
  renderer = new THREE.WebGLRenderer({\r
    antialias: true,\r
  });\r
  renderer.setPixelRatio(window.devicePixelRatio);\r
  renderer.setSize(el.clientWidth, el.clientHeight);\r
  renderer.setViewport(0, 0, el.clientWidth, el.clientHeight);\r
  // renderer.setClearColor(bgColor)\r
  renderer.setClearAlpha(0);\r
  el.appendChild(renderer.domElement);\r
  scene = new THREE.Scene();\r
\r
  camera = new THREE.PerspectiveCamera(\r
    30,\r
    el.clientWidth / el.clientHeight,\r
    0.01,\r
    100000\r
  );\r
  camera.position.set(0, 0, 120);\r
}\r
function initLight() {\r
  scene.add(new THREE.AmbientLight(0xeef0ff));\r
}\r
function initControls() {\r
  controls = new OrbitControls(camera, renderer.domElement);\r
}\r
function animation() {\r
  requestAnimationFrame(animation);\r
  renderer.render(scene, camera);\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.map {\r
  height: 600px;\r
  border: 1px solid #ccc;\r
  border-radius: 8px;\r
}\r
</style>\r
`,ht={class:"details custom-block"},lt=x("summary",null,"代码详情",-1),dt=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/threejs/demos/1/index.md","filePath":"examples/threejs/demos/1/index.md","lastUpdated":null}'),ut={name:"examples/threejs/demos/1/index.md"},pt=Object.assign(ut,{setup(t){return(e,i)=>{const r=et("show-code");return k(),j("div",null,[A(at),x("details",ht,[lt,A(r,{code:it(ot)},null,8,["code"])])])}}});export{dt as __pageData,pt as default};
