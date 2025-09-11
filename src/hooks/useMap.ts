import { MAP_KEY, SEC_JS_CODE } from '@/utils/config'
import AMapLoader from '@amap/amap-jsapi-loader'
export const useMap = async (
    plugins: string[],
    id?: string,
    options?: object,
) => {
    let map = null
    let AMap = null
    try {
        window._AMapSecurityConfig = {
            securityJsCode: SEC_JS_CODE,
        }
        AMap = await AMapLoader.load({
            key: MAP_KEY,
            version: '2.0',
            plugins,
        })
        if (id) {
            map = new AMap.Map(id, {
                viewMode: '3D', // 是否为3D地图模式
                zoom: 11, // 初始化地图级别
                center: [119.789893, 25.498767], // 初始化地图中心点位置
                ...options,
            })
        }
    } catch (e) {
        console.error(e)
    }

    return { map, AMap }
}
