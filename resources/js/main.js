var $ = require('jquery');

$(function () {
    $('#clip-btn').on('click', function (e) {
        console.log('click');
        alert('Clip');
    });
});