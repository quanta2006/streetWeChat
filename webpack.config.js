var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require("path");
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
var { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer')

module.exports = {
    entry: { 
        main: './src/sys/js/index.js',
        vendor: ['moment', 'jquery']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({ // html代码热加载
            template: './src/index.html'
        }),
        new OpenBrowserPlugin({ //自动打开浏览器
            url: 'http://localhost:8080'
        }),
        new webpack.ProvidePlugin({ //jquery解析器
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({  //公共库抽取
            name: ["vendor", "manifest"], // vendor libs + extracted manifest
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
          filename: "chunk-manifest.json",
          manifestVariable: "webpackManifest"
        }),
        new uglifyJsPlugin({ //js代码压缩
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,   //eslint语法解析
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