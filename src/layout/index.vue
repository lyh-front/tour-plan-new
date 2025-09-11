<template>
    <div class="layout">
        <div class="layout-header">
            <NavBar />
        </div>
        <div class="layout-main">
            <Main />
        </div>
        <div class="layout-footer">
            <TabBar />
        </div>
    </div>
</template>

<script setup lang="ts">
import TabBar from './components/TabBar/index.vue'
import Main from './components/Main/index.vue'
import NavBar from './components/NavBar/index.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useConfigStore } from '@/store/config'
import { setDocTitle } from '@/utils'
const route = useRoute()
const configStore = useConfigStore()

watch(
    () => route.path,
    () => {
        configStore.setActiveRoute(route)
        const title = route.meta?.title as string
        setDocTitle(title)
    },
    {
        immediate: true,
    },
)
</script>

<style scoped lang="scss">
.layout {
    width: 100%;
    height: 100%;
    position: relative;
    &-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 9999;
    }
    &-main {
        height: 100%;
        padding-bottom: var(--van-tabbar-height);
    }
}
</style>
