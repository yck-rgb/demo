<template>
  <el-button @click="todoMerge">合并</el-button>
  <el-button @click="todoReset">重置</el-button>
  <div class="merge" ref="dom"></div>
</template>
<script setup>
import { use, registerMap,init } from "echarts/core";
import { ScatterChart, EffectScatterChart,BarChart } from "echarts/charts";
import {
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import chinaMap from "./china.json";
import * as turf from "@turf/turf";

use([
  ScatterChart,
  EffectScatterChart,
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  CanvasRenderer,
  BarChart
]);

registerMap("china", chinaMap);

const key = ref(1);
const dom = ref(null);
let myChart = null;
const option = {
  geo: [
    {
      map: "china",
      roam: true,
      zlevel: 2,
      animationDurationUpdate: 0,
      itemStyle: {
        normal: {
          areaColor: "#F7F8FA",
          borderWidth: 0.5, //设置外层边框
          borderColor: "#86909C",
        },
      },
      selectedMode: false,
      emphasis: {
        label: {
          show: true,
          color: "#6042DC",
        },
        disabled: true,
        itemStyle: {
          areaColor: "#F0E8FF",
        },
      },
      select: {
        label: {
          show: true,
          color: "#fff",
        },
        disabled: true,
        itemStyle: {
          areaColor: "#6042DC",
        },
      },
      regions: [],
    },
  ],
  tooltip: {},
  legend: {},
  series: [],
}
onMounted(() => {
  myChart = init(dom.value);
  option && myChart.setOption(option);

  myChart.on("click",(params)=>{
    console.log(params);
    clickEvent(params)
  })
});
function clickEvent(params) {
  option.geo[0].regions.push({
    name: params.name,
    itemStyle: {
      normal: {
        areaColor: "#6042DC",
        borderWidth: 0.5, //设置外层边框
        borderColor: "#86909C",
      },
    },
  });
  option && myChart.setOption(option);
}

function todoMerge() {
  const names = option.geo[0].regions?.map((item) => item.name);

  const polygons = [];
  chinaMap.features.forEach((item) => {
    if (names.includes(item.properties.name)) {
      polygons.push(turf.multiPolygon(item.geometry.coordinates));
    }
  });
  const unionGeo = polygons.reduce((pre, cur) => turf.union(pre, cur)); // union只支持两个参数，当选择多个多边形时需要重复合并
  console.log(unionGeo, "unionGeo");
  let features = [];
  chinaMap.features.forEach((item) => {
    features.push(item);
  });

  unionGeo.properties.name =
    names.join()?.replace(/合并区域/g, "") + "合并区域";
  features.push(unionGeo);

  chinaMap.features = features;
  option.geo[0].regions = [];
  registerMap("china", chinaMap);
  option && myChart.setOption(option);
}

function todoReset() {
  location.href = "./";
}
</script>

<style lang="scss">
.merge {
  height: 800px;
}
</style>
