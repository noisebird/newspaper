const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // devtool: 'source-map',
    //设置入口文件，考虑一下如果有多个文件需要打包怎么办
    entry: __dirname + "/app/index.jsx",
    // 设置输出文件的路径以及文件名，文件名和路径是必填字段
    output: {
        filename: "./bundles.js",
        path: __dirname + "/dist"

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        // 启服务目录
        contentBase: "./dist",
        inline: true,
        historyApiFallback: true,
        // 端口
        port: 8088
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015", "react"
                    ]
                }
            },
            exclude: /node_modules/
        }, {
            test: /\.css/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {

            test: /\.(less|sass|scss)$/,
            // exclude: /node_modules/,
            use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader"
                }, {
                    loader: "less-loader" //compiles less to css 但是less-loader模块会依赖于less模块
                }, {
                    // 配置postcss
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: 'postcss.config.js' // 这个得在项目根目录创建此文件
                        }
                    }
                },
            ]
        }, {
            test: /\.(png|gif|jpg|jpeg|bmp)$/i,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 5000,
                    name: Date.now().png
                        // publicPath: './'
                }
            }]
        }]
    },

    plugins: [new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html',
            filename: "index.html"
        }), new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: 'dev'
        })
    ]
}