<template>
    <div class="nav-bar" :class="isScroll ? 'is-scroll' : ''">
        <NavBar :title="navBarTitle" />
    </div>
</template>

<script setup lang="ts">
import { NavBar } from 'vant'
import { useConfigStore } from '@/store/config'
import { computed, onBeforeMount, ref } from 'vue'
import { useCurrentInstance } from '@/hooks/useCurrentInstance'

const configStore = useConfigStore()
const { proxy } = useCurrentInstance()

const navBarTitle = computed<any>(() => {
    const title = configStore.state.activeRoute
        ? configStore.state.activeRoute?.meta.title
        : ''
    return title
})
const isScroll = ref(false)

onBeforeMount(() => {
    proxy.eventBus.on('pageScoll', (is: boolean) => {
        isScroll.value = is
    })
})
</script>

<style scoped lang="scss">
.nav-bar {
    :deep(.van-nav-bar) {
        background-color: transparent;
        &::after {
            border: none;
        }
    }
}
.is-scroll {
    box-shadow: var(--shadow-light);
    :deep(.van-nav-bar) {
        background-color: #fff;
    }
}
</style>
