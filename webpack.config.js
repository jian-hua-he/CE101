var webpack = require('webpack');

module.exports = {
    entry: {
        content: './resources/js/content.js',
        eventPage: './resources/js/eventPage.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js',
    },
    babel: {
        presets: ['es2015'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};