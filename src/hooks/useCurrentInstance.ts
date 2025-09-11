import { type ComponentInternalInstance, getCurrentInstance } from 'vue'

export const useCurrentInstance = () => {
    if (!getCurrentInstance()) {
        throw new Error('useCurrentInstance()只能在setup或生命周期钩子中使用。')
    }
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const proxy = appContext.config.globalProperties
    return {
        proxy,
    }
}
