import{s as d,D as s,o as a,c as p,I as n,w as _,j as u,t as h,k as c,a as m,aR as y}from"./chunks/framework.9Bysw7YS.js";const f={class:"dropper"},v={__name:"dropper",setup(l){const e=d(null);function o(){if(!window.EyeDropper){resultElement.textContent="你的浏览器不支持 EyeDropper API";return}new EyeDropper().open().then(r=>{e.value=r}).catch(r=>{e.value=r})}return(t,r)=>{const i=s("el-button");return a(),p("div",f,[n(i,{onClick:o},{default:_(()=>[m("吸色器演示")]),_:1}),u("p",null,"颜色值："+h(c(e)),1)])}}},D=`<template>\r
  <div class="dropper">\r
    <el-button @click="btn">吸色器演示</el-button>\r
    <p>颜色值：{{color}}</p>\r
  </div>\r
</template>\r
\r
<script setup>\r
const color=ref(null)\r
function btn() {\r
  if (!window.EyeDropper) {\r
    resultElement.textContent = "你的浏览器不支持 EyeDropper API";\r
    return;\r
  }\r
  const eyeDropper = new EyeDropper();\r
\r
  eyeDropper\r
    .open()\r
    .then((result) => {\r
      color.value=result\r
    })\r
    .catch((e) => {\r
      color.value=e\r
    });\r
}\r
<\/script>\r
`,b=y('<h3 id="浏览器端吸色器" tabindex="-1">浏览器端吸色器 <a class="header-anchor" href="#浏览器端吸色器" aria-label="Permalink to &quot;浏览器端吸色器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用js实现的</span></span></code></pre></div><hr>',3),E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/js案例/eye-dropper/index.md","filePath":"examples/js案例/eye-dropper/index.md"}'),x={name:"examples/js案例/eye-dropper/index.md"},g=Object.assign(x,{setup(l){return(e,o)=>{const t=s("show-code");return a(),p("div",null,[b,n(v),n(t,{code:c(D)},null,8,["code"])])}}});export{E as __pageData,g as default};
