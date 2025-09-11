module.exports = {
    plugins: {
        // postcss-pxtorem 插件的版本需要 >= 5.0.0
        // 当前版本 5.1.1，高版本会出现转换失败
        'postcss-pxtorem': {
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },
            propList: ['*'],
        },
    },
}
