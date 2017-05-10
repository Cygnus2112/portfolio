'use strict';

const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        app: './source/main.js',
        vendor: Object.keys(packageJson['dependencies'])
    },
    output: {
        path: 'build',
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.webpack.js', '.web.js']
    },
    module: {
        loaders: [
            { loader: 'json-loader', test: /\.json$/ },
            { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/, query: { presets: ['react', 'es2015']}}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};