import{a as d,ai as a,p as s,q as p,V as n,P as _,t as u,U as h,u as c,T as m,aR as y}from"./chunks/framework.BaQPFwRT.js";const f={class:"dropper"},v={__name:"dropper",setup(l){const e=d(null);function o(){if(!window.EyeDropper){resultElement.textContent="你的浏览器不支持 EyeDropper API";return}new EyeDropper().open().then(t=>{e.value=t}).catch(t=>{e.value=t})}return(r,t)=>{const i=a("el-button");return s(),p("div",f,[n(i,{onClick:o},{default:_(()=>[m("吸色器演示")]),_:1}),u("p",null,"颜色值："+h(c(e)),1)])}}},b=`<template>\r
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
`,x=y('<h3 id="浏览器端吸色器" tabindex="-1">浏览器端吸色器 <a class="header-anchor" href="#浏览器端吸色器" aria-label="Permalink to &quot;浏览器端吸色器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>使用js实现的</span></span></code></pre></div><hr>',3),w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/js案例/eye-dropper/index.md","filePath":"examples/js案例/eye-dropper/index.md","lastUpdated":null}'),D={name:"examples/js案例/eye-dropper/index.md"},g=Object.assign(D,{setup(l){return(e,o)=>{const r=a("show-code");return s(),p("div",null,[x,n(v),n(r,{code:c(b)},null,8,["code"])])}}});export{w as __pageData,g as default};
