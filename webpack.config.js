var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
// . Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [// 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=44605&name=[hash:8]-[name].[ext]' },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/,use:'babel-loader', exclude:/node_modules/},
            { test: /\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            // 在main.js中引入的文件,如果以vue结尾的(import Vue form 'vue'),就会把它的引入路径改为 vue/dist/vue.js 这个目录
            // 'vue$':'vue/dist/vue.js'
        }
    }
}