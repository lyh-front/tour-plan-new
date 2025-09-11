import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw,
} from 'vue-router'
import staticRoutes from './staticRoutes'

const routes: RouteRecordRaw[] = [...staticRoutes]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router
