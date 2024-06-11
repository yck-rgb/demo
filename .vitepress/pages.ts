import fs from "fs-extra";

const nav = [
  { text: "首页", link: "/" },
  {
    text: "three.js",
    link: "/examples/threejs/map-merge/",
    activeMatch: "/threejs/",
  },
  {
    text: "cesium",
    link: "/examples/cesium/1",
    activeMatch: "/examples/cesium/",
  },
  {
    text: "js案例",
    link: "/examples/js案例/eye-dropper",
    activeMatch: "/examples/js案例/",
  },
];
const sidebar = {
  "/examples/threejs/": [
    {
      text: "地图合并",
      link: "/examples/threejs/map-merge/",
    },
    {
      text: "地图边框等比缩放",
      link: "/examples/threejs/map-frame-scale/",
    },
    {
      text: "地图边框",
      link: "/examples/threejs/map-frame/",
    },
    {
      text: "demos",
      collapsed: true,
      items: (() => {
        const pathDir = "examples/threejs/demos";

        const items =
          fs.readdirSync(`./${pathDir}`)?.map((item) => {
            let text = "";
            try {
              text = fs.readJSONSync(`./${pathDir}/${item}/package.json`)?.name;
            } catch (error) {
              text = item;
            }
            return {
              text,
              link: `/${pathDir}/${item}/`,
            };
          }) || [];
        return items;
      })(),
    },
  ],
  "/examples/cesium/": [
    {
      text: "demos",
      collapsed: true,
      items: (() => {
        const pathDir = "examples/cesium/demos";

        const items =
          fs.readdirSync(`./${pathDir}`)?.map((item) => {
            let text = "";
            try {
              text = fs.readJSONSync(`./${pathDir}/${item}/package.json`)?.name;
            } catch (error) {
              text = item;
            }
            return {
              text,
              link: `/examples/cesium/demos/${item}/`,
            };
          }) || [];
        return items;
      })(),
    },
  ],
  "/examples/js案例/": [
    {
      text: "吸色器",
      link: "/examples/js案例/eye-dropper/",
    },
    {
      text: "视频转换",
      link: "/examples/js案例/translate-video/",
    },
    {
      text: "导出pdf",
      link: "/examples/js案例/export-pdf/",
    },
  ],
};
export { nav, sidebar };
