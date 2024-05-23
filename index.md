---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "demo"
  text: "用于展示demo"
  tagline: 一个集合
  actions:
    - theme: brand
      text: 快速开始
      link: /examples/js案例/eye-dropper
    - theme: alt
      text: 查看
      link: /examples/js案例/eye-dropper
  image:
    src: /logo.svg
    alt: demo

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---



<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #e0a1cb 30%, #d8d8e6);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #e0a1cb 50%, #d8d8e6 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

