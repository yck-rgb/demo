<template>
  <el-button @click="changeModel">改变模型</el-button>
  <el-button @click="changeColor1">改变光线颜色</el-button>
  <el-button @click="changeWidth">改变光线大小</el-button>
  <el-button @click="changeSpeed">改变光线速度</el-button>
  <hr />
  <div class="model" ref="dom"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
let scene = null;
let shaderMaterial = null;
export default {
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      light: null,
      controls: null,
      el: null,
      index:1,
    };
  },
  mounted() {
    this.el = this.$refs.dom;
    this.init();
    this.animate();
    this.loadGBL();
  },
  methods: {
    changeModel() {
      if(this.index){
        this.index=0
      }else{
        this.index=1
      }
      scene.remove(scene.children[1]);
      const loader = new GLTFLoader();
      // 加载GLB格式的模型
      loader.load(
        "/demo/people.glb",
        (gltf) => {
          console.log(gltf.scene);
          const mesh = gltf.scene.children[this.index].clone();
          mesh.material = shaderMaterial;
          // 模型加载后添加到场景

          scene.add(mesh);
          this.autoView(mesh);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.error(error);
        }
      );
    },
    changeColor1() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      shaderMaterial.uniforms.lightColor.value = new THREE.Color(
        `rgb(${r}, ${g}, ${b})`
      );
    },
    changeWidth() {
      
      shaderMaterial.uniforms.width.value +=0.01
    },
    changeSpeed(){
      shaderMaterial.uniforms.time.value +=0.01
    },
    init() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.el.clientWidth, this.el.clientHeight);
      this.renderer.setViewport(
        0,
        0,
        this.el.clientWidth,
        this.el.clientHeight
      );
      this.renderer.setClearColor(0x202020);
      //   this.renderer.setClearAlpha(0);
      this.el.appendChild(this.renderer.domElement);

      scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        40,
        this.el.clientWidth / this.el.clientHeight,
        1,
        5000
      );
      this.camera.position.set(0, 0, 0);

      this.light = new THREE.DirectionalLight(0xffffff, 4);
      this.light.position.set(0, 0, 2000);
      scene.add(this.light);

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(() => {
        this.animate();
      });
      if (shaderMaterial) {
        shaderMaterial.uniforms.time.value = performance.now() / 5000;
      }
      this.controls.update();
      this.renderer.render(scene, this.camera);
    },
    loadGBL() {
      const loader = new GLTFLoader();
      shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0.0 },
          lightColor: {
            value: new THREE.Color("blue"),
          },
          baseColor: { value: new THREE.Color("white") }, // 假设的基础模型颜色
          width: { value: 0.01 },
          resolution: {
            value: new THREE.Vector2(this.el.clientWidth, this.el.clientHeight),
          },
        },
        vertexShader: `varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
        fragmentShader: `uniform float time;
    uniform vec3 lightColor;
    uniform float width; // 扫光粗细的uniform变量
    uniform vec2 resolution;
    varying vec2 vUv;

    void main(){
        float aspectRatio = resolution.x / resolution.y;
      float position = fract(time); // 这里用fract(time)来获取循环的扫光位置
      float alpha = smoothstep(position - width, position, vUv.y)
                  - smoothstep(position, position + width, vUv.y);
      
      vec3 color = mix(vec3(0.8), lightColor, alpha); // 使用alpha值混合颜色
      gl_FragColor = vec4(color, 1.0);
    }`,
      });

      // 加载GLB格式的模型
      loader.load(
        "/demo/people.glb",
        (gltf) => {
          const mesh = gltf.scene.children[this.index].clone();
          mesh.material = shaderMaterial;
          // 模型加载后添加到场景

          scene.add(mesh);
          this.autoView(mesh);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.error(error);
        }
      );
    },
    /**
     * 视野自适应
     * @param {*} mesh 模型或其他可以获取包围盒的东西
     */
    autoView(mesh) {
      // 首先，计算包围盒的尺寸和中心，如之前所述
      const box = new THREE.Box3().setFromObject(mesh);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);

      // 然后，计算包围盒对角线的长度
      const diagonalLength = size.length();

      // 相机视角和aspect比例
      const fov = this.camera.fov * (Math.PI / 180);
      const aspect = this.camera.aspect;

      // 计算相机与模型中心的距离
      // 使用对角线长度，确保模型在视野的高度和宽度上都自适应
      const distance = diagonalLength / (2 * Math.tan(fov / 2));

      // 考虑aspect比例，确保在宽高比不同的屏幕上都工作正常
      const cameraDistance = distance * Math.max(1, 1 / aspect);

      // 设置相机位置
      this.camera.position.set(center.x, center.y, center.z + cameraDistance);

      // 确保相机朝向模型的中心
      this.camera.lookAt(center);

      // 如果你使用的是OrbitControls
      this.controls.target.set(center.x, center.y, center.z);
      this.controls.update();
    },
  },
};
</script>

<style lang="scss" scoped>
.model {
  height: 800px;
}
</style>
