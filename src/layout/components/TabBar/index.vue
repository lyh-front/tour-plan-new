<template>
    <div class="tab-bar">
        <Tabbar
            v-model="activeName"
            active-color="#333"
            inactive-color="#aaa"
            @change="onTabChange"
        >
            <TabbarItem
                v-for="item in tabList"
                :name="item.path"
                :icon="item.icon"
            >
                {{ item.name }}
            </TabbarItem>
        </Tabbar>
    </div>
</template>

<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import { ref } from 'vue'
import icon2 from '@/assets/icon/2.png'
import icon8 from '@/assets/icon/8.png'
import { useConfigStore } from '@/store/config'
import { useRouter } from 'vue-router'

interface ITabBar {
    path: string
    name: string
    icon?: any
}

const router = useRouter()
const configStore = useConfigStore()

const activeName = ref(configStore.state.activeRoute?.path)

const tabList = ref<ITabBar[]>([
    {
        path: '/',
        name: '计划',
        icon: icon2,
    },
    {
        path: '/map',
        name: '行程',
        icon: icon8,
    },
])

const onTabChange = (active: string) => {
    router.push(active)
}
</script>

<style lang="scss" scoped></style>
