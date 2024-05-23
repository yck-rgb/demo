<template>
  <div @click="btn">123</div>
</template>
<script setup>
function btn() {
  const drop = new EyeDropper();
  // 进行取色
  drop.open().then((res) => {
    // 获取取色结果
    console.log(res);
  });
}
</script>
