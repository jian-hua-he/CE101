var webpack = require('webpack');

module.exports = {
    entry: './resources/js/main.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'main.js',
    },
};