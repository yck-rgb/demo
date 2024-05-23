import { defineConfig } from "vitepress";
import juejinSvg from "./svgs/juejin";
import { nav, sidebar } from "./pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite"

const base = "/demo/";
// https://vitepress.dev/reference/site-config
export default async () => {
  return defineConfig({
    base,
    lang: "zh-Hans",
    title: "demo",
    description: "用于展示demo项目的集合",
    head: [["link", { rel: "icon", href: base + "/logo.svg" }]],
    vite: {
      plugins: [
        AutoImport({
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/, /\.vue\?vue/, // .vue
            /\.md$/, // .md
          ],
          imports: ["vue", "vue-router", "pinia"],
        }),
        Components({
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
            /\.md$/, // .md
          ],
        }),
      ],
      optimizeDeps: {
        exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
      },
      server: {
        headers: {
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Embedder-Policy': 'require-corp'
        }
      },
      css:{}
    },
    vue: {
      // @vitejs/plugin-vue 选项
    },
    // lastUpdated: true,
    // cleanUrls: true,
    // metaChunk: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: "/logo.svg",
      siteTitle: "Hello everyone",
      socialLinks: [
        { icon: "github", link: "https://github.com/yck-rgb/demo" },
        {
          icon: { svg: juejinSvg },
          link: "https://juejin.cn/user/2999123452367480",
        },
      ],
      footer: {
        message: "基于 MIT 许可发布",
        copyright: `版权所有 © 2024-${new Date().getFullYear()} yck`,
      },
      docFooter: {
        prev: "上一页",
        next: "下一页",
      },
      outline: {
        label: "页面导航",
      },
      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
      // lastUpdated: {
      //   text: "最后更新于",
      // },
      nav,
      sidebar,
    },
  });
};
