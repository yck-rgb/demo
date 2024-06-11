<template>
  <div class="merge" ref="dom"></div>
</template>
<script setup>
import * as turf from "@turf/turf";
import * as THREE from "three";
import * as d3 from "d3";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import axios from "axios";
import { ElLoading } from "element-plus";

let camera,
  renderer,
  scene,
  controls = null;
const dom = ref();

onMounted(init);

function init() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(dom.value.clientWidth, dom.value.clientHeight);
  renderer.setClearColor("#000");
  renderer.setClearAlpha(1);
  dom.value.appendChild(renderer.domElement);
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    40,
    dom.value.clientWidth / dom.value.clientHeight,
    1,
    10000
  );
  camera.position.set(0, 0, 10);
  scene.add(new THREE.AmbientLight(0xeef0ff));
  controls = new OrbitControls(camera, renderer.domElement);

  drawMap();
  animation();
}
function animation() {
  requestAnimationFrame(() => animation());

  renderer.render(scene, camera);
}

async function drawMap() {
  const res = await axios.get(
    "https://geo.datav.aliyun.com/areas_v3/bound/100000.json"
  );
  const data = res?.data;
  const projection = d3
    .geoMercator()
    .scale((dom.value.clientWidth / 2.5 / Math.PI) * 0.06)
    .center(data.features[0].properties.center)
    .translate([0.5, -0.8]);
  renderFun(data, projection, "red");

  {//新边框
    const projection = d3
      .geoMercator()
      .scale((dom.value.clientWidth / 2.5 / Math.PI) * 0.07)
      .center(data.features[0].properties.center)
      .translate([0.5, -0.8]);
    renderFun(data, projection, "#fff");
  }
}

function renderFun(data, projection, color) {
  const object = new THREE.Object3D();
  data.features.forEach((item1) => {
    item1.geometry.coordinates.forEach((item2) => {
      console.log(item1.geometry.type);
      if (item1.geometry.type === "Polygon") {
      }
      item2.forEach((item3) => {
        const shape = new THREE.Shape();
        item3 = item3.map((item4, index) => {
          const [x, y] = projection(item4);
          const point = new THREE.Vector3(x, -y, 0);

          if (index === 0) {
            shape.moveTo(x, y);
          } else {
            shape.lineTo(x, y);
          }
          return point;
        });
        const geometry = new THREE.BufferGeometry().setFromPoints(item3);
        const material = new THREE.LineBasicMaterial({ color: color });
        const line = new THREE.Line(geometry, material);
        object.add(line);
      });
    });
  });
  scene.add(object);
}
</script>

<style lang="scss">
.merge {
  height: 500px;
}
</style>
