<template>
    <div class="home" ref="homeRef" @scroll="onScroll">
        <div class="home-plan">
            <div class="weather-info">
                <span class="weather-icon">☀️</span>
                <span class="weather-text">{{ weatherInfo.weather }}</span>
                <div class="temperature">
                    <span class="temp-high">
                        {{ weatherInfo.temperature }}°
                    </span>
                </div>
            </div>
            <div class="card" v-for="(line, index) in ptLineArr" :key="index">
                <div class="card-title">{{ line.date }}</div>
                <div class="card-content">
                    <div class="spot" v-for="(spot, i) in line.spots" :key="i">
                        <div class="spot-left flex-center">
                            <div
                                class="spot-left-line"
                                v-if="i != line.spots.length - 1"
                            ></div>
                            <div class="spot-left-dot"></div>
                        </div>
                        <div class="spot-right">
                            <div class="title">
                                <span>{{ spot.icon }}</span>
                                <span>{{ spot.name }}</span>
                            </div>
                            <div class="desc">{{ spot.desc }}</div>
                            <div
                                :class="
                                    i != line.spots.length - 1
                                        ? 'spot-right-img-cover'
                                        : ''
                                "
                            >
                                <van-image
                                    class="img"
                                    :src="getSpotImage(spot.name)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-title">当地美食推荐</div>
                <div class="card-content">
                    <div
                        class="food"
                        v-for="(food, index) in foods"
                        :key="index"
                    >
                        <div class="food-icon">{{ food.icon }}</div>
                        <div class="food-info">
                            <div class="title">{{ food.name }}</div>
                            <div class="desc">{{ food.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Image as VanImage } from 'vant'
import { useCurrentInstance } from '@/hooks/useCurrentInstance'
import { ptLineArr, foods } from '@/mock/index'
import { useMap } from '@/hooks/useMap'
const { proxy } = useCurrentInstance()

// 获取景点图片（实际项目中替换为真实图片URL）
const getSpotImage = (name: string) => {
    // 这里使用占位图，实际项目中替换为真实图片
    return `https://picsum.photos/seed/${name}/800/400`
}

const homeRef = ref<HTMLDivElement | null>(null)
const onScroll = () => {
    if (homeRef.value?.scrollTop) {
        proxy.eventBus.emit('pageScoll', homeRef.value.scrollTop > 20)
    }
}

const weatherInfo = ref({})
const getWeather = async () => {
    const { AMap } = await useMap(['AMap.Weather'])
    const weather = new AMap.Weather()
    weather.getLive('平潭县', (err: any, data: any) => {
        console.log(err, data)
        if (!err) {
            weatherInfo.value = data
        }
    })
}

onMounted(() => {
    getWeather()
})
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100vh;
    overflow: auto;
    &-plan {
        padding-top: calc(20px + var(--van-nav-bar-height));
        padding-bottom: calc(var(--van-tabbar-height));
        background: linear-gradient(
            180deg,
            var(--primary-light) 0%,
            #fff 10%,
            #fff 100%
        );
        .weather-info {
            display: flex;
            align-items: center;
            gap: 0 20px;
            background: linear-gradient(135deg, #f6f9ff 0%, #e9f2ff 100%);
            padding: var(--spacing-xs) var(--spacing-md);
            border-radius: 30px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            animation: weatherFloat 3s ease-in-out infinite;
            width: 300px;
            margin: 0 auto;
            margin-bottom: 40px;
        }

        .weather-icon {
            font-size: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
        }

        .weather-text {
            font-size: 28px;
            line-height: 28px;
            color: var(--text-secondary);
            font-weight: 500;
        }

        .temperature {
            font-weight: 600;
            .temp-high {
                font-size: 28px;
                line-height: 28px;
                color: var(--color-primary);
            }
        }

        @keyframes weatherFloat {
            0%,
            100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-5px);
            }
        }
        .card {
            width: 702px;
            margin: 0 auto;
            border-radius: 16px;
            box-shadow: var(--shadow-light);
            margin-bottom: 40px;
            background-color: #fff;
            padding: 0 20px;
            &-title {
                font-weight: bold;
                font-size: 36px;
                padding: 10px 0;
                border-bottom: 1px solid #ddd;
            }
            &-content {
                padding: 20px 0;
                .title {
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 30px;
                    margin-bottom: 10px;
                    > span:nth-of-type(1) {
                        margin-right: 10px;
                    }
                }
                .desc {
                    font-size: 26px;
                    color: #777;
                    margin-bottom: 10px;
                    line-height: 40px;
                }
                .spot {
                    display: flex;
                    &-left {
                        width: 80px;
                        position: relative;
                        &-line {
                            width: 4px;
                            height: 100%;
                            background-color: #eee;
                        }
                        &-dot {
                            width: 28px;
                            height: 28px;
                            background-color: var(--primary-color);
                            border-radius: 50%;
                            border: 4px solid #fff;
                            box-shadow: 0 0 0 4px var(--primary-light);
                            position: absolute;
                            top: 0;
                        }
                    }
                    &-right {
                        flex: 1;
                        .spot-right-img-cover {
                            margin-bottom: 40px;
                        }
                        .img {
                            border-radius: 10px;
                            overflow: hidden;
                        }
                    }
                }
                .food {
                    margin-bottom: 40px;
                    display: flex;
                    align-items: flex-start;
                    &-icon {
                        font-size: 32px;
                        margin-right: 20px;
                    }
                }
            }
        }
    }
}
</style>
