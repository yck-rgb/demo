### 生成地图边框数据

```
边框越大需要计算的时间越长，最大100km卡死
复杂的地图边框需要现合并地图再生成边框数据
```


<MapFrame/>
:::details 代码详情
<show-code :code="MapFrameRaw"></show-code>
:::
<script setup>
    import MapFrame from "./map-frame.vue"
    import MapFrameRaw from "./map-frame.vue?raw"
</script>