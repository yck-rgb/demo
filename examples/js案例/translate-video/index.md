---
outline: deep
---

# 视频转换

浏览器默认支持播放常见的视频格式mp4,ogg等，但一些m4v，avi等无法播放，这时可以加载到这些视频资源然后转成mp4格式再播放，受浏览器性能影响 转换速度非常慢

这个demo没有起效  但本地vite项目是可以的
<TranslateM4v/>
<show-code :code="TranslateM4vRaw"></show-code>
<script setup>
    import TranslateM4v from "./translate-m4v.vue"
    import TranslateM4vRaw from "./translate-m4v.vue?raw"
</script>

---

本地运行总数报错
```
translate-video/:1 Uncaught (in promise) ReferenceError: SharedArrayBuffer is not defined
```

要在服务器添加请求头
```
server: {
        headers: {
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Embedder-Policy': 'require-corp'
        }
}
```

vite.config.js要添加配置
```
optimizeDeps: {
        exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
},
```

