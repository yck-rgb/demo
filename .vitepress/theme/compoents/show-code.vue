<template>
  <div class="language-vue vp-adaptive-theme">
    <button
      title="Copy Code"
      class="copy"
      :class="{ copied: isCode }"
      @click="copyCode"
    ></button>
    <pre
      class="shiki shiki-themes github-light github-dark"
    ><code class="javascript" v-html="codeString"></code></pre>
  </div>
</template>
<script setup>
import hljs from "highlight.js/lib/core";
import "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
const props = defineProps({
  code: {
    default: "",
  },
});
let isCode = ref(false);
hljs.registerLanguage("javascript", javascript);

const codeString = computed(() => {
  const highlightedCode = hljs.highlight(props.code, {
    language: "javascript",
  });
  return highlightedCode.value;
});

function copyCode() {
  const textArea = document.createElement("textarea");
  textArea.value = props.code;
  // 避免在页面中看到文本域：
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    console.log("Copying text command was " + successful);
  } catch (err) {
    console.error("Oops, unable to copy", err);
  }
  document.body.removeChild(textArea);
//   ElMessage.success("复制成功");
  isCode.value = true;
  setTimeout(() => {
    isCode.value = false;
  }, 1000);
}
</script>
