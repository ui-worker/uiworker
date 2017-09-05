const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    /* 输入文件 */
    entry: {
        vendors: ['vue', 'vue-router'],
        // vendors: ['vue', 'vue-router', 'uiworker'],
        build: './assets/main.js',
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, '../dist/uiworker'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/uiworker/',
        /* 文件名 */
        filename: '[name].js?v=[chunkhash:8]'
    },
    watch: true,
    resolve: {
        extensions: [
            '.js', '.vue'
        ],
        alias: {
            // 'uiworker': './dist/uiworker.min.js'

            // 'vue': 'vue/dist/vue.runtime.esm.js',
            // 'vue-router': 'vue-router/dist/vue-router.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css': ExtractTextPlugin.extract({
                            use: ['css-loader'],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendors', 
            filename: 'vendor.js' 
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../assets/index.html')
        }),
        new ExtractTextPlugin('styles.css?v=[chunkhash:8]'),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
}