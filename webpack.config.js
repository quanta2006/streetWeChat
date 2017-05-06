var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/sys/js/index.js',
    output: {
        filename: './dist/sys.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ // html代码热加载
            template: './src/index.html'
        }),
        new OpenBrowserPlugin({ //自动打开浏览器
            url: 'http://localhost:8080'
        }),
        // new uglifyJsPlugin({ //js代码压缩
        //     compress: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            enforce: 'pre',
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }, {
            test: /\.less$/, // less解析器
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg)$/, // img压缩器
            loader: 'url-loader?limit=8192'
        }, ]
    },
    devtool: 'source-map'
};