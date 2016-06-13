var webpack = require('webpack');

module.exports = {
    entry: {
        popup: './resources/js/popup.js',
        content: './resources/js/content.js'
    },
    output: {
        path: __dirname + '/public/js',
        filename: '[name].js',
    },
};