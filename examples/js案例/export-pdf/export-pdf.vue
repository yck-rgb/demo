<template>
  <div class="export-pdf">
    <el-button @click="btn">导出</el-button>
    <div class="pages">
      <div class="main-title">
        “数据要素”业务商机推进双周报
      </div>
      <div class="main-time">
        2024年 4月15日 ~ 4月25日
      </div>
    </div>
  </div>
</template>

<script setup>
import HTML2CANVAS from "html2canvas";

function btn() {}
</script>

<style lang="scss" scoped>
.export-pdf {
  width: 1190px;
  border: 1px solid red;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .pages {
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 120px 0;

    // .page {
    //   position: relative;
    //   height: 530px;

    //   .bg {
    //     width: 1346px;
    //     height: 530px;
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     background: linear-gradient(to bottom,#FFE0CD 0%,#fff 50%);
    //   }
    // }
  }
}
</style>
