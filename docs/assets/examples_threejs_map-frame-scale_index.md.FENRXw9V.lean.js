import{W as M,S,P as W,A,O as F,u as L,am as O,V,c as k,J as B,X as I}from"./chunks/OrbitControls.DaTzZhGl.js";import{a as q,m as h}from"./chunks/axios.B7q12-4A.js";import{a as N,e as D,p as g,q as v,ai as G,V as _,t as E,u as z,aR as J}from"./chunks/framework.BaQPFwRT.js";const U={__name:"map-frame",setup(w){let o,e,t;const n=N();D(y);function y(){e=new M({antialias:!0}),e.setPixelRatio(window.devicePixelRatio),e.setSize(n.value.clientWidth,n.value.clientHeight),e.setClearColor("#000"),e.setClearAlpha(1),n.value.appendChild(e.domElement),t=new S,o=new W(40,n.value.clientWidth/n.value.clientHeight,1,1e4),o.position.set(0,0,10),t.add(new A(15659263)),new F(o,e.domElement),x(),p()}function p(){requestAnimationFrame(()=>p()),e.render(t,o)}async function x(){const a=await q.get("https://geo.datav.aliyun.com/areas_v3/bound/100000.json"),r=a==null?void 0:a.data,i=h().scale(n.value.clientWidth/2.5/Math.PI*.06).center(r.features[0].properties.center).translate([.5,-.8]);u(r,i,"red");{const s=h().scale(n.value.clientWidth/2.5/Math.PI*.07).center(r.features[0].properties.center).translate([.5,-.8]);u(r,s,"#fff")}}function u(a,r,i){const s=new L;a.features.forEach(c=>{c.geometry.coordinates.forEach(b=>{console.log(c.geometry.type),c.geometry.type,b.forEach(l=>{const f=new O;l=l.map((R,C)=>{const[d,m]=r(R),H=new V(d,-m,0);return C===0?f.moveTo(d,m):f.lineTo(d,m),H});const j=new k().setFromPoints(l),T=new B({color:i}),P=new I(j,T);s.add(P)})})}),t.add(s)}return(a,r)=>(g(),v("div",{class:"merge",ref_key:"dom",ref:n},null,512))}},X=`<template>\r
  <div class="merge" ref="dom"></div>\r
</template>\r
<script setup>\r
import * as turf from "@turf/turf";\r
import * as THREE from "three";\r
import * as d3 from "d3";\r
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";\r
import axios from "axios";\r
import { ElLoading } from "element-plus";\r
\r
let camera,\r
  renderer,\r
  scene,\r
  controls = null;\r
const dom = ref();\r
\r
onMounted(init);\r
\r
function init() {\r
  renderer = new THREE.WebGLRenderer({\r
    antialias: true,\r
  });\r
  renderer.setPixelRatio(window.devicePixelRatio);\r
  renderer.setSize(dom.value.clientWidth, dom.value.clientHeight);\r
  renderer.setClearColor("#000");\r
  renderer.setClearAlpha(1);\r
  dom.value.appendChild(renderer.domElement);\r
  scene = new THREE.Scene();\r
\r
  camera = new THREE.PerspectiveCamera(\r
    40,\r
    dom.value.clientWidth / dom.value.clientHeight,\r
    1,\r
    10000\r
  );\r
  camera.position.set(0, 0, 10);\r
  scene.add(new THREE.AmbientLight(0xeef0ff));\r
  controls = new OrbitControls(camera, renderer.domElement);\r
\r
  drawMap();\r
  animation();\r
}\r
function animation() {\r
  requestAnimationFrame(() => animation());\r
\r
  renderer.render(scene, camera);\r
}\r
\r
async function drawMap() {\r
  const res = await axios.get(\r
    "https://geo.datav.aliyun.com/areas_v3/bound/100000.json"\r
  );\r
  const data = res?.data;\r
  const projection = d3\r
    .geoMercator()\r
    .scale((dom.value.clientWidth / 2.5 / Math.PI) * 0.06)\r
    .center(data.features[0].properties.center)\r
    .translate([0.5, -0.8]);\r
  renderFun(data, projection, "red");\r
\r
  {//新边框\r
    const projection = d3\r
      .geoMercator()\r
      .scale((dom.value.clientWidth / 2.5 / Math.PI) * 0.07)\r
      .center(data.features[0].properties.center)\r
      .translate([0.5, -0.8]);\r
    renderFun(data, projection, "#fff");\r
  }\r
}\r
\r
function renderFun(data, projection, color) {\r
  const object = new THREE.Object3D();\r
  data.features.forEach((item1) => {\r
    item1.geometry.coordinates.forEach((item2) => {\r
      console.log(item1.geometry.type);\r
      if (item1.geometry.type === "Polygon") {\r
      }\r
      item2.forEach((item3) => {\r
        const shape = new THREE.Shape();\r
        item3 = item3.map((item4, index) => {\r
          const [x, y] = projection(item4);\r
          const point = new THREE.Vector3(x, -y, 0);\r
\r
          if (index === 0) {\r
            shape.moveTo(x, y);\r
          } else {\r
            shape.lineTo(x, y);\r
          }\r
          return point;\r
        });\r
        const geometry = new THREE.BufferGeometry().setFromPoints(item3);\r
        const material = new THREE.LineBasicMaterial({ color: color });\r
        const line = new THREE.Line(geometry, material);\r
        object.add(line);\r
      });\r
    });\r
  });\r
  scene.add(object);\r
}\r
<\/script>\r
\r
<style lang="scss">\r
.merge {\r
  height: 500px;\r
}\r
</style>\r
`,$=J("",2),K={class:"details custom-block"},Q=E("summary",null,"代码详情",-1),re=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/threejs/map-frame-scale/index.md","filePath":"examples/threejs/map-frame-scale/index.md","lastUpdated":null}'),Y={name:"examples/threejs/map-frame-scale/index.md"},te=Object.assign(Y,{setup(w){return(o,e)=>{const t=G("show-code");return g(),v("div",null,[$,_(U),E("details",K,[Q,_(t,{code:z(X)},null,8,["code"])])])}}});export{re as __pageData,te as default};
