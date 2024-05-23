const nav = [
  { text: "首页", link: "/" },
  { text: "three.js", link: "/examples/threejs/1", activeMatch: "/threejs/" },
  {
    text: "cesium",
    link: "/examples/cesium/2",
    activeMatch: "/examples/cesium/",
  },
  {
    text: "js案例",
    link: "/examples/js案例/1",
    activeMatch: "/examples/js案例/",
  },
];
const sidebar = {
  "/examples/threejs/": [
    {
      text: "three.js",
      collapsed: true,
      items: [{ text: "2", link: "/examples/three.js/1" }],
    },
  ],
  "/examples/cesium/": [
    {
      text: "three.js",
      collapsed: true,
      items: [{ text: "2", link: "/examples/three.js/1" }],
    },
  ],
  "/examples/js案例/": [
    {
      text: "吸色器",
      link: "/examples/js案例/eye-dropper/",
    },
    {
      text: "视频转换",
      link: "/examples/js案例/translate-video/"
    },
  ],
};
export { nav, sidebar };
