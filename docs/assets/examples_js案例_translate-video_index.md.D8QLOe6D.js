var B=Object.defineProperty;var S=(r,e,t)=>e in r?B(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(S(r,typeof e!="symbol"?e+"":e,t),t),I=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var n=(r,e,t)=>(I(r,e,"read from private field"),t?t.call(r):e.get(r)),f=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},w=(r,e,t,a)=>(I(r,e,"write to private field"),a?a.call(r,t):e.set(r,t),t);import{m as j,a as k,aw as P,p as T,q as N,t as u,U as F,F as x,ai as $,V as C,u as W,T as M,aR as V}from"./chunks/framework.BaQPFwRT.js";var s;(function(r){r.LOAD="LOAD",r.EXEC="EXEC",r.WRITE_FILE="WRITE_FILE",r.READ_FILE="READ_FILE",r.DELETE_FILE="DELETE_FILE",r.RENAME="RENAME",r.CREATE_DIR="CREATE_DIR",r.LIST_DIR="LIST_DIR",r.DELETE_DIR="DELETE_DIR",r.ERROR="ERROR",r.DOWNLOAD="DOWNLOAD",r.PROGRESS="PROGRESS",r.LOG="LOG",r.MOUNT="MOUNT",r.UNMOUNT="UNMOUNT"})(s||(s={}));const G=(()=>{let r=0;return()=>r++})(),H=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),X=new Error("called FFmpeg.terminate()");var d,m,p,R,E,_,l;class z{constructor(){f(this,d,null);f(this,m,{});f(this,p,{});f(this,R,[]);f(this,E,[]);i(this,"loaded",!1);f(this,_,()=>{n(this,d)&&(n(this,d).onmessage=({data:{id:e,type:t,data:a}})=>{switch(t){case s.LOAD:this.loaded=!0,n(this,m)[e](a);break;case s.MOUNT:case s.UNMOUNT:case s.EXEC:case s.WRITE_FILE:case s.READ_FILE:case s.DELETE_FILE:case s.RENAME:case s.CREATE_DIR:case s.LIST_DIR:case s.DELETE_DIR:n(this,m)[e](a);break;case s.LOG:n(this,R).forEach(o=>o(a));break;case s.PROGRESS:n(this,E).forEach(o=>o(a));break;case s.ERROR:n(this,p)[e](a);break}delete n(this,m)[e],delete n(this,p)[e]})});f(this,l,({type:e,data:t},a=[],o)=>n(this,d)?new Promise((c,h)=>{const g=G();n(this,d)&&n(this,d).postMessage({id:g,type:e,data:t},a),n(this,m)[g]=c,n(this,p)[g]=h,o==null||o.addEventListener("abort",()=>{h(new DOMException(`Message # ${g} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(H));i(this,"load",({classWorkerURL:e,...t}={},{signal:a}={})=>(n(this,d)||(w(this,d,e?new Worker(new URL(e,import.meta.url),{type:"module"}):new Worker(new URL("/demo/assets/worker-lPYB70QI.js",import.meta.url),{type:"module"})),n(this,_).call(this)),n(this,l).call(this,{type:s.LOAD,data:t},void 0,a)));i(this,"exec",(e,t=-1,{signal:a}={})=>n(this,l).call(this,{type:s.EXEC,data:{args:e,timeout:t}},void 0,a));i(this,"terminate",()=>{const e=Object.keys(n(this,p));for(const t of e)n(this,p)[t](X),delete n(this,p)[t],delete n(this,m)[t];n(this,d)&&(n(this,d).terminate(),w(this,d,null),this.loaded=!1)});i(this,"writeFile",(e,t,{signal:a}={})=>{const o=[];return t instanceof Uint8Array&&o.push(t.buffer),n(this,l).call(this,{type:s.WRITE_FILE,data:{path:e,data:t}},o,a)});i(this,"mount",(e,t,a)=>{const o=[];return n(this,l).call(this,{type:s.MOUNT,data:{fsType:e,options:t,mountPoint:a}},o)});i(this,"unmount",e=>{const t=[];return n(this,l).call(this,{type:s.UNMOUNT,data:{mountPoint:e}},t)});i(this,"readFile",(e,t="binary",{signal:a}={})=>n(this,l).call(this,{type:s.READ_FILE,data:{path:e,encoding:t}},void 0,a));i(this,"deleteFile",(e,{signal:t}={})=>n(this,l).call(this,{type:s.DELETE_FILE,data:{path:e}},void 0,t));i(this,"rename",(e,t,{signal:a}={})=>n(this,l).call(this,{type:s.RENAME,data:{oldPath:e,newPath:t}},void 0,a));i(this,"createDir",(e,{signal:t}={})=>n(this,l).call(this,{type:s.CREATE_DIR,data:{path:e}},void 0,t));i(this,"listDir",(e,{signal:t}={})=>n(this,l).call(this,{type:s.LIST_DIR,data:{path:e}},void 0,t));i(this,"deleteDir",(e,{signal:t}={})=>n(this,l).call(this,{type:s.DELETE_DIR,data:{path:e}},void 0,t))}on(e,t){e==="log"?n(this,R).push(t):e==="progress"&&n(this,E).push(t)}off(e,t){e==="log"?w(this,R,n(this,R).filter(a=>a!==t)):e==="progress"&&w(this,E,n(this,E).filter(a=>a!==t))}}d=new WeakMap,m=new WeakMap,p=new WeakMap,R=new WeakMap,E=new WeakMap,_=new WeakMap,l=new WeakMap;const Y=async(r,e)=>{var o;const t=await fetch(r);let a;try{const c=parseInt(t.headers.get(HeaderContentLength)||"-1"),h=(o=t.body)==null?void 0:o.getReader();if(!h)throw ERROR_RESPONSE_BODY_READER;const g=[];let v=0;for(;;){const{done:b,value:L}=await h.read(),y=L?L.length:0;if(b){if(c!=-1&&c!==v)throw ERROR_INCOMPLETED_DOWNLOAD;e&&e({url:r,total:c,received:v,delta:y,done:b});break}g.push(L),v+=y,e&&e({url:r,total:c,received:v,delta:y,done:b})}const D=new Uint8Array(v);let A=0;for(const b of g)D.set(b,A),A+=b.length;a=D.buffer}catch(c){console.log("failed to send download progress event: ",c),a=await t.arrayBuffer()}return a};async function O(r,e,t=!1,a){const o=t?await Y(r,a):await(await fetch(r)).arrayBuffer(),c=new Blob([o],{type:e});return URL.createObjectURL(c)}async function q(r){let e;return/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(r)?e=atob(r.split(",")[1]).split("").map(t=>t.charCodeAt(0)):e=await(await fetch(r)).arrayBuffer(),new Uint8Array(e)}const U="https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm",Z="/videos/2.m4v",J=j({name:"App",setup(){const r=k("Click Start to Transcode");let e=k("");const t=new z;console.log(t);async function a(){t.terminate(),r.value="Loading ffmpeg-core.js",t.on("log",({message:c})=>{r.value=c}),await t.load({coreURL:await O(`${U}/ffmpeg-core.js`,"text/javascript"),wasmURL:await O(`${U}/ffmpeg-core.wasm`,"application/wasm"),workerURL:await O(`${U}/ffmpeg-core.worker.js`,"text/javascript")}),r.value="Start transcoding",await t.writeFile("2.m4v",await q(Z)),await t.exec(["-i","2.m4v","test.mp4"]),r.value="Complete transcoding";const o=await t.readFile("test.mp4");await t.deleteFile("2.m4v"),await t.deleteFile("test.mp4"),e.value=URL.createObjectURL(new Blob([o.buffer],{type:"video/mp4"}))}return{video:e,message:r,transcode:a}}}),Q=["src"],K=u("br",null,null,-1);function ee(r,e,t,a,o,c){return T(),N(x,null,[u("video",{src:r.video,controls:""},null,8,Q),K,u("button",{onClick:e[0]||(e[0]=(...h)=>r.transcode&&r.transcode(...h))},"Start"),u("p",null,F(r.message),1)],64)}const te=P(J,[["render",ee]]),re=`<template>\r
  <video :src="video" controls />\r
  <br />\r
  <button @click="transcode">Start</button>\r
  <p>{{ message }}</p>\r
</template>\r
\r
<script lang="ts">\r
import { FFmpeg } from "@ffmpeg/ffmpeg";\r
import type { LogEvent } from "@ffmpeg/ffmpeg/dist/esm/types";\r
//   import { fetchFile, toBlobURL } from "@ffmpeg/util";\r
import { defineComponent, ref } from "vue";\r
const downloadWithProgress = async (url, cb) => {\r
  const resp = await fetch(url);\r
  let buf;\r
  try {\r
    // Set total to -1 to indicate that there is not Content-Type Header.\r
    const total = parseInt(resp.headers.get(HeaderContentLength) || "-1");\r
    const reader = resp.body?.getReader();\r
    if (!reader) throw ERROR_RESPONSE_BODY_READER;\r
    const chunks = [];\r
    let received = 0;\r
    for (;;) {\r
      const { done, value } = await reader.read();\r
      const delta = value ? value.length : 0;\r
      if (done) {\r
        if (total != -1 && total !== received) throw ERROR_INCOMPLETED_DOWNLOAD;\r
        cb && cb({ url, total, received, delta, done });\r
        break;\r
      }\r
      chunks.push(value);\r
      received += delta;\r
      cb && cb({ url, total, received, delta, done });\r
    }\r
    const data = new Uint8Array(received);\r
    let position = 0;\r
    for (const chunk of chunks) {\r
      data.set(chunk, position);\r
      position += chunk.length;\r
    }\r
    buf = data.buffer;\r
  } catch (e) {\r
    console.log(\`failed to send download progress event: \`, e);\r
    // Fetch arrayBuffer directly when it is not possible to get progress.\r
    buf = await resp.arrayBuffer();\r
    cb &&\r
      cb({\r
        url,\r
        total: buf.byteLength,\r
        received: buf.byteLength,\r
        delta: 0,\r
        done: true,\r
      });\r
  }\r
  return buf;\r
};\r
\r
async function toBlobURL(url, mimeType, progress = false, cb): Promise<any> {\r
  const buf = progress\r
    ? await downloadWithProgress(url, cb)\r
    : await (await fetch(url)).arrayBuffer();\r
  const blob = new Blob([buf], { type: mimeType });\r
  return URL.createObjectURL(blob);\r
}\r
const readFromBlobOrFile = (blob) =>\r
  new Promise((resolve, reject) => {\r
    const fileReader = new FileReader();\r
    fileReader.onload = () => {\r
      const { result } = fileReader;\r
      if (result instanceof ArrayBuffer) {\r
        resolve(new Uint8Array(result));\r
      } else {\r
        resolve(new Uint8Array());\r
      }\r
    };\r
    fileReader.onerror = (event) => {\r
      reject(\r
        Error(\r
          \`File could not be read! Code=\${event?.target?.error?.code || -1}\`\r
        )\r
      );\r
    };\r
    fileReader.readAsArrayBuffer(blob);\r
  });\r
\r
async function fetchFile(file) {\r
  let data;\r
  if (typeof file === "string") {\r
    /* From base64 format */\r
    if (/data:_data\\/([a-zA-Z]*);base64,([^"]*)/.test(file)) {\r
      data = atob(file.split(",")[1])\r
        .split("")\r
        .map((c) => c.charCodeAt(0));\r
      /* From remote server/URL */\r
    } else {\r
      data = await (await fetch(file)).arrayBuffer();\r
    }\r
  } else if (file instanceof URL) {\r
    data = await (await fetch(file)).arrayBuffer();\r
  } else if (file instanceof File || file instanceof Blob) {\r
    data = await readFromBlobOrFile(file);\r
  } else {\r
    return new Uint8Array();\r
  }\r
  return new Uint8Array(data);\r
}\r
\r
const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm";\r
//   const videoURL = '2.m4v'\r
const videoURL = "/videos/2.m4v";\r
\r
export default defineComponent({\r
  name: "App",\r
  setup() {\r
    const message = ref("Click Start to Transcode");\r
    let video = ref("");\r
    const ffmpeg = new FFmpeg();\r
    console.log(ffmpeg);\r
\r
    async function transcode() {\r
      ffmpeg.terminate();\r
      message.value = "Loading ffmpeg-core.js";\r
      ffmpeg.on("log", ({ message: msg }: LogEvent) => {\r
        message.value = msg;\r
      });\r
\r
      await ffmpeg.load({\r
        coreURL: await toBlobURL(\r
          \`\${baseURL}/ffmpeg-core.js\`,\r
          "text/javascript"\r
        ),\r
        wasmURL: await toBlobURL(\r
          \`\${baseURL}/ffmpeg-core.wasm\`,\r
          "application/wasm"\r
        ),\r
        workerURL: await toBlobURL(\r
          \`\${baseURL}/ffmpeg-core.worker.js\`,\r
          "text/javascript"\r
        ),\r
      });\r
\r
      message.value = "Start transcoding";\r
      await ffmpeg.writeFile("2.m4v", await fetchFile(videoURL));\r
\r
      await ffmpeg.exec(["-i", "2.m4v", "test.mp4"]);\r
      message.value = "Complete transcoding";\r
      const data = await ffmpeg.readFile("test.mp4");\r
      await ffmpeg.deleteFile("2.m4v");\r
      await ffmpeg.deleteFile("test.mp4");\r
      video.value = URL.createObjectURL(\r
        new Blob([(data as Uint8Array).buffer], { type: "video/mp4" })\r
      );\r
    }\r
    return {\r
      video,\r
      message,\r
      transcode,\r
    };\r
  },\r
});\r
<\/script>\r
\r
<style></style>\r
`,ne=u("h1",{id:"视频转换",tabindex:"-1"},[M("视频转换 "),u("a",{class:"header-anchor",href:"#视频转换","aria-label":'Permalink to "视频转换"'},"​")],-1),ae=u("p",null,"浏览器默认支持播放常见的视频格式mp4,ogg等，但一些m4v，avi等无法播放，这时可以加载到这些视频资源然后转成mp4格式再播放，受浏览器性能影响 转换速度非常慢",-1),se=u("p",null,"这个demo没有起效 但本地vite项目是可以的",-1),oe=V(`<hr><p>本地运行总数报错</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>translate-video/:1 Uncaught (in promise) ReferenceError: SharedArrayBuffer is not defined</span></span></code></pre></div><p>要在服务器添加请求头</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server: {</span></span>
<span class="line"><span>        headers: {</span></span>
<span class="line"><span>          &#39;Cross-Origin-Opener-Policy&#39;: &#39;same-origin&#39;,</span></span>
<span class="line"><span>          &#39;Cross-Origin-Embedder-Policy&#39;: &#39;require-corp&#39;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>vite.config.js要添加配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>optimizeDeps: {</span></span>
<span class="line"><span>        exclude: [&#39;@ffmpeg/ffmpeg&#39;, &#39;@ffmpeg/util&#39;]</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,7),de=JSON.parse('{"title":"视频转换","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/js案例/translate-video/index.md","filePath":"examples/js案例/translate-video/index.md","lastUpdated":null}'),ie={name:"examples/js案例/translate-video/index.md"},pe=Object.assign(ie,{setup(r){return(e,t)=>{const a=$("show-code");return T(),N("div",null,[ne,ae,se,C(te),C(a,{code:W(re)},null,8,["code"]),oe])}}});export{de as __pageData,pe as default};
