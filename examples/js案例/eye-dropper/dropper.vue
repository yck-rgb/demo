<template>
  <div class="dropper">
    <el-button @click="btn">吸色器演示</el-button>
    <p>颜色值：{{color}}</p>
  </div>
</template>

<script setup>
const color=ref(null)
function btn() {
  if (!window.EyeDropper) {
    resultElement.textContent = "你的浏览器不支持 EyeDropper API";
    return;
  }
  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      color.value=result
    })
    .catch((e) => {
      color.value=e
    });
}
</script>
