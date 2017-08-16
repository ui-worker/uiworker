const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const package = require('../package.json');

module.exports = {
    /* 输入文件 */
    entry: {
        build: './src/index.js',
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, '../dist/uiworker'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
        filename: 'uiworker-' + package.version + '.min.js',
        /* 指定库的名称，绑定到全局中，编译成单独的文件 */
        library: 'uiworker',
        /* 指定模块输出类型，UMD模式（通过module.exports输出） */
        libraryTarget: 'umd'
    },
    watch: true,
    externals: {
        vue: 'Vue'
    },
    resolve: {
        extensions: [
            '.js', '.vue'
        ]
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css': ExtractTextPlugin.extract({
                            use: [
                                {
                                    loader: 'css-loader',
                                    options:{
                                        minimize: true //css压缩
                                    }
                                }
                            ],
                            // use: ['style-loader!css-loader'],
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
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextPlugin('uiworker.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}