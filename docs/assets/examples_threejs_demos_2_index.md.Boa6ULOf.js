import{W as S,S as z,P as B,A as D,O as G,B as I,M as V,D as j,a as v,b as A,f as W,E as O,d as k,C as F,c as $,e as Z,F as q,g as N,V as y}from"./chunks/OrbitControls.DaTzZhGl.js";import{aw as U,a as J,e as K,p as C,q as E,ai as Q,V as x,t as b,u as X}from"./chunks/framework.BaQPFwRT.js";const Y={__name:"code-vue",setup(M){const h=J(null);let n,e,s,c;K(()=>{R(),window.addEventListener("resize",()=>{})});function R(){e=h.value,_(),H(),P(),u(),T()}function _(){n=new S({antialias:!0}),n.setPixelRatio(window.devicePixelRatio),n.setSize(e.clientWidth,e.clientHeight),n.setViewport(0,0,e.clientWidth,e.clientHeight),n.setClearAlpha(0),e.appendChild(n.domElement),s=new z,c=new B(30,e.clientWidth/e.clientHeight,.01,1e5)}function H(){s.add(new D(15659263))}function P(){new G(c,n.domElement)}function u(){requestAnimationFrame(u),n.render(s,c)}function L(t,o,m,w){o.position.set(0,0,0);const i=new N;i.setFromObject(o);const r=new y,a=new y;i.getSize(a),i.getCenter(r);const l=t.fov*(Math.PI/180),g=2*Math.atan(Math.tan(l/2)*t.aspect);let d=a.z/2+Math.abs(a.x/2/Math.tan(g/2)),f=a.z/2+Math.abs(a.y/2/Math.tan(l/2)),p=Math.max(d,f);p*=m,t.position.set(r.x,r.y,r.z+p)}async function T(){const t=new I(14,14,14,20,20,20),o=new V({color:16776960,side:j}),m=new v(t,o);{const w=new A(15,32,16),i=new W({color:"#fff",side:2}),r=new v(w,i),l=new O(r.geometry).attributes.position.array;{const g=new k({color:new F("red")}),d=new $,f=new Z(d,g);s.add(f),d.setAttribute("position",new q(l,3))}}console.log(t.attributes.position.array.length),L(c,m,2.5)}return(t,o)=>(C(),E("div",{class:"test",ref_key:"dom",ref:h},null,512))}},ee=U(Y,[["__scopeId","data-v-648bc6c2"]]),ne=`<template>\r
  <div class="test" ref="dom">\r
\r
  </div>\r
</template>\r
\r
<script setup lang="js">\r
const dom = ref(null)\r
import * as THREE from 'three'\r
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'\r
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';\r
let renderer, el, scene, camera, controls;\r
onMounted(() => {\r
\r
  init()\r
  // drawCanvas()\r
  window.addEventListener("resize", () => {\r
      // updateSize()\r
  })\r
  // createCanvas(10, 10, "/images/1.png", 10)\r
})\r
\r
/**\r
* 色带\r
*/\r
function createColorBand(colors) {\r
\r
  const canvas = document.createElement("canvas")\r
  canvas.width = 256\r
  canvas.height = 1\r
  const ctx = canvas.getContext("2d")\r
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);\r
\r
  for (let k in colors) {\r
      grad.addColorStop(k, colors[k]);\r
  }\r
  ctx.fillStyle = grad\r
  ctx.fillRect(0, 0, canvas.width, canvas.height)\r
\r
  return ctx.getImageData(0, 0, canvas.width, canvas.height).data\r
}\r
\r
function drawCanvas(colors, percent = 1) {\r
\r
  const width = 800\r
  const height = 800\r
  const radius = width * 0.5\r
  const greyCanvas = document.createElement("canvas")\r
  greyCanvas.width = width\r
  greyCanvas.height = height\r
  const greyCtx = greyCanvas.getContext("2d")\r
\r
  const grad = greyCtx.createRadialGradient(width / 2, width / 2, 0, width / 2, width / 2, width / 2);\r
  grad.addColorStop(0.0, 'rgba(0,0,0,1)');\r
  grad.addColorStop(1.0, 'rgba(0,0,0,0)');\r
  greyCtx.beginPath();\r
  greyCtx.fillStyle = grad\r
  greyCtx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);\r
  greyCtx.closePath();\r
  greyCtx.fill();\r
\r
  // greyCtx.globalCompositeOperation = 'difference';\r
  greyCtx.beginPath();\r
  greyCtx.fillStyle = grad\r
  greyCtx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);\r
  greyCtx.closePath();\r
  greyCtx.fill();\r
  const colorData = createColorBand(colors)\r
  const colorLength = colorData.slice(0, 256 * 4 * percent)\r
  console.log(colorLength);\r
  const colors2 = {}\r
  for (let i = 0, length = colorLength.length; i < length; i += 4) {\r
      console.log(colorLength?.[i]);\r
      if (i > colorLength.length\r
          || i + 1 > colorLength.length\r
          || i + 2 > colorLength.length\r
          || i + 3 > colorLength.length\r
      ) {\r
          break;\r
      }\r
      colors2[1 / colorLength.length * (i + 4)] = \`rgba(\${colorLength[i]},\${colorLength[i + 1]},\${colorLength[i + 2]},\${colorLength[i + 3]})\`\r
  }\r
  console.log(colors2);\r
\r
  const colorData2 = createColorBand(colors2)\r
\r
  const canvas = document.createElement("canvas")\r
  canvas.width = greyCanvas.width\r
  canvas.height = greyCanvas.height\r
  const ctx2 = canvas.getContext("2d")\r
  // ctx2.globalAlpha = percent;\r
  ctx2.drawImage(greyCanvas, 0, 0, greyCanvas.width, greyCanvas.height)\r
\r
\r
  const imageData = ctx2.getImageData(0, 0, canvas.width, canvas.height);\r
  for (let i = 3; i < imageData.data.length; i = i + 4) {\r
      let opacity = imageData.data[i];\r
      let offset = opacity * 4;\r
\r
      //red\r
      imageData.data[i - 3] = colorData2[offset];\r
      //green\r
      imageData.data[i - 2] = colorData2[offset + 1];\r
      //blue\r
      imageData.data[i - 1] = colorData2[offset + 2];\r
      if (opacity > 0) {\r
          imageData.data[i] = colorData2[offset + 3];\r
      }\r
  }\r
\r
  ctx2.putImageData(imageData, 0, 0);\r
  document.body.appendChild(canvas)\r
  document.body.appendChild(greyCanvas)\r
  return {\r
      greyCanvas,\r
      canvas,\r
  }\r
}\r
\r
function createCanvas(width, height, imgPath, num = 1) {\r
  // eslint-disable-next-line no-async-promise-executor\r
  return new Promise(resolve => {\r
      const canvas = document.createElement("canvas")\r
      canvas.width = width\r
      canvas.height = height\r
      const ctx = canvas.getContext("2d")\r
      const grd = ctx.createLinearGradient(0, 0, width, height);\r
      grd.addColorStop(0, "red");\r
      grd.addColorStop(1, "blue");\r
      ctx.fillStyle = grd;\r
      ctx.fillRect(0, 0, width, height)\r
      const img = new Image();\r
      img.src = imgPath;\r
\r
      img.onload = async function () {\r
          // 在canvas上绘制图片\r
          const currentImg = await zoomImage(img, num,)\r
          ctx.fillStyle = ctx.createPattern(currentImg, 'repeat');\r
          ctx.fillRect(0, 0, width, height)\r
          resolve(canvas)\r
      };\r
\r
      // dom.value.appendChild(canvas)\r
  })\r
}\r
\r
function zoomImage(img, num = 1) {\r
  return new Promise(resolve => {\r
      const canvas = document.createElement("canvas")\r
      // canvas.width = img.width / num\r
      // canvas.height = img.height / num\r
      canvas.width = 10 / num\r
      canvas.height = 10 / (img.width / img.height) / num\r
      const ctx = canvas.getContext("2d")\r
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\r
      const newImg = new Image();\r
      newImg.src = canvas.toDataURL();\r
      newImg.onload = function () {\r
          resolve(newImg)\r
      }\r
  })\r
}\r
\r
function init() {\r
  el = dom.value\r
  initThree()//初始化渲染器 相机\r
  initLight()//初始胡灯光\r
  initControls()//初始化控制器\r
  animation()//死循环渲染\r
  createPlane()//创建立方体\r
}\r
function initThree() {\r
  renderer = new THREE.WebGLRenderer({\r
      antialias: true\r
  })\r
  renderer.setPixelRatio(window.devicePixelRatio)\r
  renderer.setSize(el.clientWidth, el.clientHeight)\r
  renderer.setViewport(0, 0, el.clientWidth, el.clientHeight);\r
  // renderer.setClearColor(bgColor)\r
  renderer.setClearAlpha(0)\r
  el.appendChild(renderer.domElement)\r
  scene = new THREE.Scene()\r
\r
  camera = new THREE.PerspectiveCamera(\r
      30,\r
      el.clientWidth / el.clientHeight,\r
      0.01,\r
      100000\r
  )\r
  // camera.position.set(0, 0, 10)\r
}\r
function initLight() {\r
  scene.add(new THREE.AmbientLight(0xeef0ff))\r
}\r
function initControls() {\r
  controls = new OrbitControls(camera, renderer.domElement)\r
}\r
function animation() {\r
  requestAnimationFrame(animation)\r
  renderer.render(scene, camera)\r
}\r
\r
function updateSize() {\r
  renderer.setSize(el.clientWidth, el.clientHeight)\r
  renderer.setViewport(0, 0, el.clientWidth, el.clientHeight);\r
  camera.aspect = el.clientWidth / el.clientHeight\r
  // 更新相机的投影矩阵\r
  camera.updateProjectionMatrix()\r
  controls.update()\r
}\r
\r
function autoView(camera, object, offset, orbitControls) {\r
  object.position.set(0, 0, 0)\r
  const boundingBox = new THREE.Box3();\r
  boundingBox.setFromObject(object);\r
\r
  const middle = new THREE.Vector3();\r
  const size = new THREE.Vector3();\r
  boundingBox.getSize(size);\r
  boundingBox.getCenter(middle);\r
\r
\r
  const fov = camera.fov * (Math.PI / 180);\r
  const fovh = 2 * Math.atan(Math.tan(fov / 2) * camera.aspect);\r
  let dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan(fovh / 2));\r
  let dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan(fov / 2));\r
  let cameraZ = Math.max(dx, dy);\r
\r
  // offset the camera, if desired (to avoid filling the whole canvas)\r
  if (offset !== undefined && offset !== 0) cameraZ *= offset;\r
\r
  camera.position.set(middle.x, middle.y, middle.z + cameraZ);\r
\r
}\r
\r
async function createPlane() {\r
\r
\r
\r
  const geometry = new THREE.BoxGeometry(14, 14, 14, 20, 20, 20);\r
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });\r
  const plane = new THREE.Mesh(geometry, material);\r
  // scene.add(plane);\r
\r
\r
  {\r
      // const geometry = new THREE.BoxGeometry(25, 25, 0);\r
      const geometry2 = new THREE.SphereGeometry(15, 32, 16);\r
      const material = new THREE.MeshLambertMaterial({\r
          color: "#fff",\r
          side: 2\r
      });\r
      const mesh1 = new THREE.Mesh(geometry2, material);\r
      // scene.add(mesh1);\r
\r
      const edgesGeometry = new THREE.EdgesGeometry(mesh1.geometry);\r
      const positions = edgesGeometry.attributes.position.array;\r
\r
      {\r
          const material3 = new THREE.PointsMaterial({ color: new THREE.Color("red") });\r
          const geometry3 = new THREE.BufferGeometry();\r
          const points3 = new THREE.Points(geometry3, material3);\r
          scene.add(points3)\r
          geometry3.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));\r
\r
      }\r
\r
  }\r
  console.log(geometry.attributes.position.array.length);\r
  autoView(camera, plane, 2.5, controls)\r
}\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.test {\r
  height: 800px;\r
  overflow: hidden;\r
}\r
</style>`,te={class:"details custom-block"},re=b("summary",null,"代码详情",-1),se=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/threejs/demos/2/index.md","filePath":"examples/threejs/demos/2/index.md","lastUpdated":null}'),ae={name:"examples/threejs/demos/2/index.md"},ce=Object.assign(ae,{setup(M){return(h,n)=>{const e=Q("show-code");return C(),E("div",null,[x(ee),b("details",te,[re,x(e,{code:X(ne)},null,8,["code"])])])}}});export{se as __pageData,ce as default};
