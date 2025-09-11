import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export const useConfigStore = defineStore(
    'config',
    () => {
        const state = reactive<{
            activeRoute: RouteLocationNormalized | null
        }>({
            activeRoute: null,
        })

        const setActiveRoute = (route: RouteLocationNormalized | null) => {
            state.activeRoute = route
        }

        return {
            state,
            setActiveRoute,
        }
    },
    {
        persist: {
            key: 'STORE_CONFIG',
        },
    },
)
