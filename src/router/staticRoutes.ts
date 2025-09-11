import type { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')

const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/:path(.*)*',
        redirect: '/',
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '旅游计划',
                },
            },
            {
                path: 'map',
                component: () => import('@/views/map/index.vue'),
                meta: {
                    title: '旅游行程',
                },
            },
        ],
    },
]

export default staticRoutes
