const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('./env.conf');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./config/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    // eval-source-map is faster for development
    devtool: '#eval-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // occurence ensures consistent build hashes
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // 根据模板插入css/js等生成最终HTML
        new HtmlWebpackPlugin({
            // favicon:'./src/images/favicon.ico',
            // 生成的html存放路径，相对于 path
            filename: path.join(config.path.assetsRoot, '/workbench.html'),
            // html模板路径
            template: path.join(config.path.sourceRoot, '/pages/workbench.html'),
            // 告诉插件要引用entry里面的哪几个入口
           // chunks: ['workbench'],
            // 允许插件修改哪些内容，包括head与body
            inject: true,
            // 为静态资源生成hash值
            hash: true,
            // 压缩HTML文件
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                collapseWhitespace: false
            }
        })
    ]
});
