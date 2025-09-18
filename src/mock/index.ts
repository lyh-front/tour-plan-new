// 行程数据
export const ptLineArr = [
    {
        date: '10月1日',
        spots: [
            {
                name: '龙凤头沙滩',
                pos: [119.808368, 25.50258],
                icon: '🏖️',
                tickets: 0,
                desc: '顶流沙滩，早起日出、傍晚日落都很美，有停车场（10-15元/小时，需早起抢位），有秋千、有海滨浴场，晚上海风吹着很舒服。',
            },
            {
                name: '猴研岛',
                pos: [119.857042, 25.458862],
                icon: '🏝️',
                tickets: 38,
                desc: '大陆离台湾最近点，只有68海里，可在岛上观望到台湾岛。',
            },
            {
                name: '坛南湾',
                pos: [119.794387, 25.456025],
                icon: '🏖️',
                tickets: 0,
                desc: '人少，沙滩海水都很干净。',
            },
        ],
    },
    {
        date: '10月2日',
        spots: [
            {
                name: '仙人井',
                pos: [119.870136, 25.549806],
                icon: '⛰️',
                tickets: 0,
                desc: '自然景观多，原始美，峡谷。',
            },
            {
                name: '模镜村',
                pos: [119.844189, 25.5666],
                icon: '🏘️',
                tickets: 0,
                desc: '赶海胜地！可以体验赶海乐趣，记得提前查好潮汐表。',
            },
            {
                name: '环岛路',
                pos: [119.816904, 25.609069],
                icon: '🛣️',
                tickets: 0,
                desc: '公路美景，适合拍视频和照片。',
            },
            {
                name: '镜沙',
                pos: [119.813657, 25.615792],
                icon: '🏖️',
                tickets: 0,
                desc: '小众景点，黑色沙滩，拍照非常出片。',
            },
            {
                name: '长江澳',
                pos: [119.779744, 25.618959],
                icon: '🌳',
                tickets: 0,
                desc: '日落风车，绝美风车海，建议傍晚时分前往。',
            },
        ],
    },
    {
        date: '10月3日',
        spots: [
            {
                name: '白沙公园',
                pos: [119.784597, 25.649829],
                icon: '🌳',
                tickets: 0,
                desc: '风光优美，有"小济州岛"之称。',
            },
            {
                name: '风车森林公路',
                pos: [119.779997, 25.659455],
                tickets: 0,
                icon: '🛣️',
                desc: '适合拍公路大片，风景如画。',
            },
            {
                name: '北部生态廊道',
                pos: [119.774682, 25.656684],
                icon: '🌳',
                tickets: 0,
                desc: '拍照绝美，非常推荐，建议先去这里再回长江澳。',
            },
            {
                name: 'S弯童话小镇',
                pos: [119.772444, 25.645633],
                icon: '🏘️',
                tickets: 0,
                desc: '欧式建筑风格，仿佛置身童话世界。',
            },
        ],
    },
]

// 美食数据
export const foods = [
    {
        name: '大利名鸡',
        icon: '🍗',
        desc: '当地特色美食，鸡肉鲜嫩多汁',
    },
    {
        name: '潭式煎包',
        icon: '🥟',
        desc: '皮薄馅大，口感酥脆',
    },
    {
        name: '陈阿姨海蛎饼',
        icon: '🥠',
        desc: '地道海味小吃，外酥里嫩',
    },
    {
        name: '三喜海鲜粥',
        icon: '🥣',
        desc: '新鲜海鲜熬制，营养美味',
    },
    {
        name: '车站夜市',
        icon: '🌃',
        desc: '当地最大夜市，各类小吃应有尽有',
    },
    {
        name: 'SeaU云顶海景餐厅',
        icon: '🍽️',
        desc: '一边用餐一边欣赏海景',
    },
    {
        name: '云记烤鸭',
        icon: '🦆',
        desc: '香香酥脆烤鸭',
    },
    {
        name: '肥婆肥仔',
        icon: '🦆',
        desc: '香香酥脆烤鸭',
    },
    {
        name: '唐沫茶兮',
        icon: '🦆',
        desc: '香香酥脆烤鸭',
    },
]

// 行程点经纬度数据

export const linePosArr = ptLineArr.reduce((pre: any[], item) => {
    for (const spot of item.spots) {
        if (spot.pos.length != 0) {
            pre.push({
                name: spot.name,
                pos: spot.pos,
            })
        }
    }
    return pre
}, [])
