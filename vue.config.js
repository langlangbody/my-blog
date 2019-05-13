// vue.config.js
module.exports = {
    publicPath: '/',
    transpileDependencies: ['vuex-module-decorators'],

    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,

    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        // var externals = {
        //   vue: 'Vue',
        //   axios: 'axios',
        //   'element-ui': 'ELEMENT',
        //   'vue-router': 'VueRouter',
        //   vuex: 'Vuex'
        // }
        // config.externals(externals)
        // const cdn = {
        //   js: [
        //     // vue
        //     'https://cdn.bootcss.com/vue/2.5.22/vue.esm.js',
        //     // vue-router
        //     'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js',
        //     // vuex
        //     'https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js',
        //     // axios
        //     'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js',
        //     // element-ui js
        //     'https://cdn.bootcss.com/element-ui/2.4.11/index.js'
        //   ]
        // }
        // config.plugin('html')
        //     .tap(args => {
        //       args[0].cdn = cdn
        //       return args
        //     })
        config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')

        config.resolve.symlinks(true)

        return config
    },

    configureWebpack: config => {
    },

    // generate sourceMap for production build?
    productionSourceMap: false,

    // CSS related options

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: undefined,

    // PWA插件的选项。
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    // 配置WebPACK DEV服务器行为
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0', // 127.0.0.1
        hot: true,
        port: 8080,
        // https: false,
        // hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {
          '/': {
            target: 'http://0.0.0.0:9000',
            ws: true,
            pathRewrite: {
              "^/\\.netlify/functions": "" //用'/api' 代替 'http://218.78.187.216/api/v1'
            },
            changeOrigin: true
          }
        }, // string | Object
        before: app => { }
    },

    css: undefined,

    // 第三方插件
    pluginOptions: {}

}
