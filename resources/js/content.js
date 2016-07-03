import $ from 'jquery';
import { detectFont, supportedFonts } from 'detect-font';

$(function () {

    let chrome = window.chrome;

    $('h1, h2, h3, p, a, span').mouseenter(function (e) {
        let that = this;
        let fontFamily = detectFont(that);
        console.log(fontFamily);
    });

});