var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-ui-router']
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./'),
            path.resolve('./node_modules'),
            path.resolve('./lib')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'angular1-templateurl-loader'}
                ]
            },
            {
                // THIS IS THE MAGIC!
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }]  // THAT WAS THE MAGIC!
    },
    watch: true,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]lib[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: 'single'
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    }
};