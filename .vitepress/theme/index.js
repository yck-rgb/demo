import DefaultTheme from 'vitepress/theme'
import ShowCode from "./compoents/show-code.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component("show-code",ShowCode)
  },
};