<template>
    <div class="code-runner">
      <div class="code-block">
        <!-- 代码块 -->
        <pre><code>{{ code }}</code></pre>
      </div>
      <div class="result">
        <!-- 代码运行结果 -->
        <component :is="codeComponent" />
      </div>
    </div>
  </template>

  <script>
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    props: {
      code: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const codeComponent = computed(() => {
        // 将代码字符串转为组件
        const component = new Function(`return ${props.code}`)();
        return defineComponent(component);
      });

      return {
        codeComponent,
      };
    },
  });
  </script>

  <style>
  .code-runner {
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .code-block {
    background-color: #f9f9f9;
    padding: 15px;
  }
  </style>