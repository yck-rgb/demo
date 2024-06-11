<template>
  <div class="map" ref="dom"></div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as TWEEN from "@tweenjs/tween.js";

const dom = ref(null);
let renderer: any, el: any, scene: any, camera: any, controls: any;
onMounted(() => {
  init();
});

function createPlane() {
  const geometry = new THREE.BoxGeometry(40, 40, 40, 10, 10, 10);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.visible = false;

  const geometry2 = new THREE.SphereGeometry(10, 26, 26);
  const material2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sphere2 = new THREE.Mesh(geometry2, material2);
  sphere2.visible = false;

  console.log(cube.geometry.attributes.position);
  console.log(sphere2.geometry.attributes.position);
  const positions1 = cube.geometry.attributes.position;
  const positions2 = sphere2.geometry.attributes.position;

  const geometry3 = new THREE.BufferGeometry();
  // geometry3.setAttribute('position', new THREE.Float32BufferAttribute(positions2.array, 3));

  const material3 = new THREE.PointsMaterial({ color: new THREE.Color("red") });

  const points3 = new THREE.Points(geometry3, material3);
  scene.add(points3);

  const group1 = new TWEEN.Group();
  const tween1 = new TWEEN.Tween(positions1.array, group1) // 创建一个修改“坐标”的新 tween。
    .to(positions2.array, 2000) // 在 1 秒内移动到 (300, 200)。
    .easing(TWEEN.Easing.Cubic.InOut) // 使用缓动函数使动画流畅。
    .onUpdate((res) => {
      console.log(res);
      geometry3.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(res, 3)
      );
    })
    .start();
  tween1.repeat(Infinity); //重复次数
  tween1.yoyo(true);
  // tween1.delay(100)//第一次等1s
  loop();
  function loop() {
    group1.update();
    requestAnimationFrame(() => {
      loop();
    });
  }
}

function init() {
  el = dom.value;
  initThree(); //初始化渲染器 相机
  initLight(); //初始胡灯光
  initControls(); //初始化控制器
  animation(); //死循环渲染
  createPlane(); //创建立方体
}
function initThree() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(el.clientWidth, el.clientHeight);
  renderer.setViewport(0, 0, el.clientWidth, el.clientHeight);
  // renderer.setClearColor(bgColor)
  renderer.setClearAlpha(0);
  el.appendChild(renderer.domElement);
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    30,
    el.clientWidth / el.clientHeight,
    0.01,
    100000
  );
  camera.position.set(0, 0, 120);
}
function initLight() {
  scene.add(new THREE.AmbientLight(0xeef0ff));
}
function initControls() {
  controls = new OrbitControls(camera, renderer.domElement);
}
function animation() {
  requestAnimationFrame(animation);
  renderer.render(scene, camera);
}
</script>

<style lang="scss" scoped>
.map {
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
