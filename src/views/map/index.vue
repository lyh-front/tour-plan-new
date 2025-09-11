<template>
    <div class="map">
        <div class="map-container" id="map-container"></div>
    </div>
</template>

<script setup lang="ts">
import { useMap } from '@/hooks/useMap'
import { onMounted, onUnmounted } from 'vue'
import { linePosArr } from '@/mock'

let map: any = null

const initMap = async () => {
    const { map: _map, AMap } = await useMap(
        ['AMap.ToolBar', 'AMap.Scale', 'AMap.Geocoder', 'AMap.MarkerClusterer'],
        'map-container',
    )
    map = _map

    // 添加地图控件
    map.addControl(new AMap.ToolBar())
    map.addControl(new AMap.Scale())

    // 添加点标记
    const markerArr: any[] = []
    linePosArr.forEach((item) => {
        const marker = new AMap.Marker({
            position: new AMap.LngLat(item.pos[0], item.pos[1]),
            title: item.name,
            content: '⭐️',
        })
        markerArr.push(marker)
        // 添加信息窗口
        const infoWindow = new AMap.InfoWindow({
            content: `<div style="padding-top: 10px; width: 80px;text-align: center;"><h4>${item.name}</h4></div>`,
            offset: new AMap.Pixel(8, 0),
        })

        // 绑定点击事件
        marker.on('click', () => {
            infoWindow.open(map, marker.getPosition())
        })
    })
    map.add(markerArr)
}

onMounted(() => {
    initMap()
})

onUnmounted(() => {
    if (map) {
        map.destroy()
        map = null
    }
})
</script>

<style scoped lang="scss">
.map {
    height: 100%;
    &-container {
        width: 100%;
        height: 100%;
    }
}
</style>
