export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: false
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
                path: '/',
                component: 'Home/index',
            }
        ]
    }],
}