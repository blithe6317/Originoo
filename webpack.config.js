const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtraPulgin = require('extract-text-webpack-plugin');

const extSass = new ExtraPulgin({
    filename: '[name].css'
});

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: './app/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtraPulgin.extract('style-loader', 'css-loader')
        }, {
            test: /\.scss$/,
            loader: ExtraPulgin.extract('style-loader', 'css-loader', 'sass-loader')
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: './build',
        port: 8081,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'app/index.temp.html'
        }),
        extSass,
        new ExtraPulgin('style.css')
    ]
}