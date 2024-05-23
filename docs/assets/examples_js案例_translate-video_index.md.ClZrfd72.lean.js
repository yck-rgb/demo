var O=Object.defineProperty;var k=(s,e,t)=>e in s?O(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(k(s,typeof e!="symbol"?e+"":e,t),t),w=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var n=(s,e,t)=>(w(s,e,"read from private field"),t?t.call(s):e.get(s)),d=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},E=(s,e,t,a)=>(w(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);import{d as A,s as b,_ as C,o as U,c as I,j as f,t as T,F as N,D as S,I as D,k as y,a as j,aR as x}from"./chunks/framework.9Bysw7YS.js";var r;(function(s){s.LOAD="LOAD",s.EXEC="EXEC",s.WRITE_FILE="WRITE_FILE",s.READ_FILE="READ_FILE",s.DELETE_FILE="DELETE_FILE",s.RENAME="RENAME",s.CREATE_DIR="CREATE_DIR",s.LIST_DIR="LIST_DIR",s.DELETE_DIR="DELETE_DIR",s.ERROR="ERROR",s.DOWNLOAD="DOWNLOAD",s.PROGRESS="PROGRESS",s.LOG="LOG",s.MOUNT="MOUNT",s.UNMOUNT="UNMOUNT"})(r||(r={}));const B=(()=>{let s=0;return()=>s++})(),$=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),P=new Error("called FFmpeg.terminate()");var l,m,c,u,h,_,p;class F{constructor(){d(this,l,null);d(this,m,{});d(this,c,{});d(this,u,[]);d(this,h,[]);i(this,"loaded",!1);d(this,_,()=>{n(this,l)&&(n(this,l).onmessage=({data:{id:e,type:t,data:a}})=>{switch(t){case r.LOAD:this.loaded=!0,n(this,m)[e](a);break;case r.MOUNT:case r.UNMOUNT:case r.EXEC:case r.WRITE_FILE:case r.READ_FILE:case r.DELETE_FILE:case r.RENAME:case r.CREATE_DIR:case r.LIST_DIR:case r.DELETE_DIR:n(this,m)[e](a);break;case r.LOG:n(this,u).forEach(o=>o(a));break;case r.PROGRESS:n(this,h).forEach(o=>o(a));break;case r.ERROR:n(this,c)[e](a);break}delete n(this,m)[e],delete n(this,c)[e]})});d(this,p,({type:e,data:t},a=[],o)=>n(this,l)?new Promise((g,R)=>{const v=B();n(this,l)&&n(this,l).postMessage({id:v,type:e,data:t},a),n(this,m)[v]=g,n(this,c)[v]=R,o==null||o.addEventListener("abort",()=>{R(new DOMException(`Message # ${v} was aborted`,"AbortError"))},{once:!0})}):Promise.reject($));i(this,"load",({classWorkerURL:e,...t}={},{signal:a}={})=>(n(this,l)||(E(this,l,e?new Worker(new URL(e,import.meta.url),{type:"module"}):new Worker(new URL("/demo/assets/worker-lPYB70QI.js",import.meta.url),{type:"module"})),n(this,_).call(this)),n(this,p).call(this,{type:r.LOAD,data:t},void 0,a)));i(this,"exec",(e,t=-1,{signal:a}={})=>n(this,p).call(this,{type:r.EXEC,data:{args:e,timeout:t}},void 0,a));i(this,"terminate",()=>{const e=Object.keys(n(this,c));for(const t of e)n(this,c)[t](P),delete n(this,c)[t],delete n(this,m)[t];n(this,l)&&(n(this,l).terminate(),E(this,l,null),this.loaded=!1)});i(this,"writeFile",(e,t,{signal:a}={})=>{const o=[];return t instanceof Uint8Array&&o.push(t.buffer),n(this,p).call(this,{type:r.WRITE_FILE,data:{path:e,data:t}},o,a)});i(this,"mount",(e,t,a)=>{const o=[];return n(this,p).call(this,{type:r.MOUNT,data:{fsType:e,options:t,mountPoint:a}},o)});i(this,"unmount",e=>{const t=[];return n(this,p).call(this,{type:r.UNMOUNT,data:{mountPoint:e}},t)});i(this,"readFile",(e,t="binary",{signal:a}={})=>n(this,p).call(this,{type:r.READ_FILE,data:{path:e,encoding:t}},void 0,a));i(this,"deleteFile",(e,{signal:t}={})=>n(this,p).call(this,{type:r.DELETE_FILE,data:{path:e}},void 0,t));i(this,"rename",(e,t,{signal:a}={})=>n(this,p).call(this,{type:r.RENAME,data:{oldPath:e,newPath:t}},void 0,a));i(this,"createDir",(e,{signal:t}={})=>n(this,p).call(this,{type:r.CREATE_DIR,data:{path:e}},void 0,t));i(this,"listDir",(e,{signal:t}={})=>n(this,p).call(this,{type:r.LIST_DIR,data:{path:e}},void 0,t));i(this,"deleteDir",(e,{signal:t}={})=>n(this,p).call(this,{type:r.DELETE_DIR,data:{path:e}},void 0,t))}on(e,t){e==="log"?n(this,u).push(t):e==="progress"&&n(this,h).push(t)}off(e,t){e==="log"?E(this,u,n(this,u).filter(a=>a!==t)):e==="progress"&&E(this,h,n(this,h).filter(a=>a!==t))}}l=new WeakMap,m=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,_=new WeakMap,p=new WeakMap;const L="https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm",W="/videos/2.m4v",G=A({name:"App",setup(){const s=b("Click Start to Transcode");let e=b("");const t=new F;console.log(t);async function a(){t.terminate(),s.value="Loading ffmpeg-core.js",t.on("log",({message:g})=>{s.value=g}),await t.load({coreURL:await toBlobURL(`${L}/ffmpeg-core.js`,"text/javascript"),wasmURL:await toBlobURL(`${L}/ffmpeg-core.wasm`,"application/wasm"),workerURL:await toBlobURL(`${L}/ffmpeg-core.worker.js`,"text/javascript")}),s.value="Start transcoding",await t.writeFile("2.m4v",await fetchFile(W)),await t.exec(["-i","2.m4v","test.mp4"]),s.value="Complete transcoding";const o=await t.readFile("test.mp4");await t.deleteFile("2.m4v"),await t.deleteFile("test.mp4"),e.value=URL.createObjectURL(new Blob([o.buffer],{type:"video/mp4"}))}return{video:e,message:s,transcode:a}}}),M=["src"],V=f("br",null,null,-1);function X(s,e,t,a,o,g){return U(),I(N,null,[f("video",{src:s.video,controls:""},null,8,M),V,f("button",{onClick:e[0]||(e[0]=(...R)=>s.transcode&&s.transcode(...R))},"Start"),f("p",null,T(s.message),1)],64)}const q=C(G,[["render",X]]),z=`<template>\r
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
  `,H=f("h1",{id:"视频转换",tabindex:"-1"},[j("视频转换 "),f("a",{class:"header-anchor",href:"#视频转换","aria-label":'Permalink to "视频转换"'},"​")],-1),J=f("p",null,"浏览器默认支持播放常见的视频格式mp4,ogg等，但一些m4v，avi等无法播放，这时可以加载到这些视频资源然后转成mp4格式再播放，受浏览器性能影响 转换速度非常慢",-1),Q=f("p",null,"这个demo没有起效 但本地vite项目是可以的",-1),Y=x("",7),te=JSON.parse('{"title":"视频转换","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/js案例/translate-video/index.md","filePath":"examples/js案例/translate-video/index.md"}'),K={name:"examples/js案例/translate-video/index.md"},se=Object.assign(K,{setup(s){return(e,t)=>{const a=S("show-code");return U(),I("div",null,[H,J,Q,D(q),D(a,{code:y(z)},null,8,["code"]),Y])}}});export{te as __pageData,se as default};
