var webpack = require('webpack');

module.exports = {
    entry: './resources/js/popup.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'popup.js',
    },
};