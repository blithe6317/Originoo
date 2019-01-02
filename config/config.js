export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: false,
            dynamicImport: true,
        }],
    ],
    cssLoaderOptions: {
        sourceMap: false,
        camelCase: false,
        modules: false,
        localIdentName: '[local]'
    },
    routes: [{
        path: '/',
        component: './index',
        routes: [
            {
                path: '/index',
                component: 'Home/index',
            }, {
                path: '/user-center',
                component: 'Center/layout',
                routes: [{
                    path: '/user-center/center',
                    component: 'Center/index'
                }, {
                    path: '/user-center/downloadlog',
                    component: 'Center/DownLoadLog'
                }, {
                    path: '/user-center/collection',
                    component: 'Center/Collection'
                }, {
                    path: '/user-center/follow',
                    component: 'Center/Follow'
                }, {
                    path: '/user-center/browse',
                    component: 'Center/Browse'
                }, {
                    path: '/user-center/combo',
                    component: 'Center/Combo'
                }, {
                    path: '/user-center/order',
                    component: 'Center/Order'
                }, {
                    path: '/user-center/invoice',
                    component: 'Center/Invoice'
                }, {
                    path: '/user-center/recharge',
                    component: 'Center/Recharge'
                }, {
                    path: '/user-center/coupon',
                    component: 'Center/Coupon'
                }, {
                    path: '/user-center/author',
                    component: 'Center/Author'
                }, {
                    path: '/user-center/setting',
                    component: 'Center/Setting'
                }, {
                    path: '/user-center/msg',
                    component: 'Center/Msg'
                }]
            }, {
                path: '/piclist',
                component: 'PicList/index',
            }, {
                component: './404',
            }
        ]
    }],
}