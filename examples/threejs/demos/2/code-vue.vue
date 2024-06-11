<template>
  <div class="test" ref="dom">

  </div>
</template>

<script setup lang="js">
const dom = ref(null)
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
let renderer, el, scene, camera, controls;
onMounted(() => {

  init()
  // drawCanvas()
  window.addEventListener("resize", () => {
      // updateSize()
  })
  // createCanvas(10, 10, "/images/1.png", 10)
})

/**
* 色带
*/
function createColorBand(colors) {

  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 1
  const ctx = canvas.getContext("2d")
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

  for (let k in colors) {
      grad.addColorStop(k, colors[k]);
  }
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  return ctx.getImageData(0, 0, canvas.width, canvas.height).data
}

function drawCanvas(colors, percent = 1) {

  const width = 800
  const height = 800
  const radius = width * 0.5
  const greyCanvas = document.createElement("canvas")
  greyCanvas.width = width
  greyCanvas.height = height
  const greyCtx = greyCanvas.getContext("2d")

  const grad = greyCtx.createRadialGradient(width / 2, width / 2, 0, width / 2, width / 2, width / 2);
  grad.addColorStop(0.0, 'rgba(0,0,0,1)');
  grad.addColorStop(1.0, 'rgba(0,0,0,0)');
  greyCtx.beginPath();
  greyCtx.fillStyle = grad
  greyCtx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
  greyCtx.closePath();
  greyCtx.fill();

  // greyCtx.globalCompositeOperation = 'difference';
  greyCtx.beginPath();
  greyCtx.fillStyle = grad
  greyCtx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
  greyCtx.closePath();
  greyCtx.fill();
  const colorData = createColorBand(colors)
  const colorLength = colorData.slice(0, 256 * 4 * percent)
  console.log(colorLength);
  const colors2 = {}
  for (let i = 0, length = colorLength.length; i < length; i += 4) {
      console.log(colorLength?.[i]);
      if (i > colorLength.length
          || i + 1 > colorLength.length
          || i + 2 > colorLength.length
          || i + 3 > colorLength.length
      ) {
          break;
      }
      colors2[1 / colorLength.length * (i + 4)] = `rgba(${colorLength[i]},${colorLength[i + 1]},${colorLength[i + 2]},${colorLength[i + 3]})`
  }
  console.log(colors2);

  const colorData2 = createColorBand(colors2)

  const canvas = document.createElement("canvas")
  canvas.width = greyCanvas.width
  canvas.height = greyCanvas.height
  const ctx2 = canvas.getContext("2d")
  // ctx2.globalAlpha = percent;
  ctx2.drawImage(greyCanvas, 0, 0, greyCanvas.width, greyCanvas.height)


  const imageData = ctx2.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 3; i < imageData.data.length; i = i + 4) {
      let opacity = imageData.data[i];
      let offset = opacity * 4;

      //red
      imageData.data[i - 3] = colorData2[offset];
      //green
      imageData.data[i - 2] = colorData2[offset + 1];
      //blue
      imageData.data[i - 1] = colorData2[offset + 2];
      if (opacity > 0) {
          imageData.data[i] = colorData2[offset + 3];
      }
  }

  ctx2.putImageData(imageData, 0, 0);
  document.body.appendChild(canvas)
  document.body.appendChild(greyCanvas)
  return {
      greyCanvas,
      canvas,
  }
}

function createCanvas(width, height, imgPath, num = 1) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(resolve => {
      const canvas = document.createElement("canvas")
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext("2d")
      const grd = ctx.createLinearGradient(0, 0, width, height);
      grd.addColorStop(0, "red");
      grd.addColorStop(1, "blue");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height)
      const img = new Image();
      img.src = imgPath;

      img.onload = async function () {
          // 在canvas上绘制图片
          const currentImg = await zoomImage(img, num,)
          ctx.fillStyle = ctx.createPattern(currentImg, 'repeat');
          ctx.fillRect(0, 0, width, height)
          resolve(canvas)
      };

      // dom.value.appendChild(canvas)
  })
}

function zoomImage(img, num = 1) {
  return new Promise(resolve => {
      const canvas = document.createElement("canvas")
      // canvas.width = img.width / num
      // canvas.height = img.height / num
      canvas.width = 10 / num
      canvas.height = 10 / (img.width / img.height) / num
      const ctx = canvas.getContext("2d")
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const newImg = new Image();
      newImg.src = canvas.toDataURL();
      newImg.onload = function () {
          resolve(newImg)
      }
  })
}

function init() {
  el = dom.value
  initThree()//初始化渲染器 相机
  initLight()//初始胡灯光
  initControls()//初始化控制器
  animation()//死循环渲染
  createPlane()//创建立方体
}
function initThree() {
  renderer = new THREE.WebGLRenderer({
      antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(el.clientWidth, el.clientHeight)
  renderer.setViewport(0, 0, el.clientWidth, el.clientHeight);
  // renderer.setClearColor(bgColor)
  renderer.setClearAlpha(0)
  el.appendChild(renderer.domElement)
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
      30,
      el.clientWidth / el.clientHeight,
      0.01,
      100000
  )
  // camera.position.set(0, 0, 10)
}
function initLight() {
  scene.add(new THREE.AmbientLight(0xeef0ff))
}
function initControls() {
  controls = new OrbitControls(camera, renderer.domElement)
}
function animation() {
  requestAnimationFrame(animation)
  renderer.render(scene, camera)
}

function updateSize() {
  renderer.setSize(el.clientWidth, el.clientHeight)
  renderer.setViewport(0, 0, el.clientWidth, el.clientHeight);
  camera.aspect = el.clientWidth / el.clientHeight
  // 更新相机的投影矩阵
  camera.updateProjectionMatrix()
  controls.update()
}

function autoView(camera, object, offset, orbitControls) {
  object.position.set(0, 0, 0)
  const boundingBox = new THREE.Box3();
  boundingBox.setFromObject(object);

  const middle = new THREE.Vector3();
  const size = new THREE.Vector3();
  boundingBox.getSize(size);
  boundingBox.getCenter(middle);


  const fov = camera.fov * (Math.PI / 180);
  const fovh = 2 * Math.atan(Math.tan(fov / 2) * camera.aspect);
  let dx = size.z / 2 + Math.abs(size.x / 2 / Math.tan(fovh / 2));
  let dy = size.z / 2 + Math.abs(size.y / 2 / Math.tan(fov / 2));
  let cameraZ = Math.max(dx, dy);

  // offset the camera, if desired (to avoid filling the whole canvas)
  if (offset !== undefined && offset !== 0) cameraZ *= offset;

  camera.position.set(middle.x, middle.y, middle.z + cameraZ);

}

async function createPlane() {



  const geometry = new THREE.BoxGeometry(14, 14, 14, 20, 20, 20);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
  const plane = new THREE.Mesh(geometry, material);
  // scene.add(plane);


  {
      // const geometry = new THREE.BoxGeometry(25, 25, 0);
      const geometry2 = new THREE.SphereGeometry(15, 32, 16);
      const material = new THREE.MeshLambertMaterial({
          color: "#fff",
          side: 2
      });
      const mesh1 = new THREE.Mesh(geometry2, material);
      // scene.add(mesh1);

      const edgesGeometry = new THREE.EdgesGeometry(mesh1.geometry);
      const positions = edgesGeometry.attributes.position.array;

      {
          const material3 = new THREE.PointsMaterial({ color: new THREE.Color("red") });
          const geometry3 = new THREE.BufferGeometry();
          const points3 = new THREE.Points(geometry3, material3);
          scene.add(points3)
          geometry3.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      }

  }
  console.log(geometry.attributes.position.array.length);
  autoView(camera, plane, 2.5, controls)
}
</script>

<style lang="scss" scoped>
.test {
  height: 800px;
  overflow: hidden;
}
</style>