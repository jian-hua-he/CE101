import $ from 'jquery';
import { detectFont, supportedFonts } from 'detect-font';

$(function () {

    let chrome = window.chrome;

    let selector = $('h1, h2, h3, h4, h5, h6, p, a, span');
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

        if (request.switchOn) {
            selector.on('mouseenter', function (e) {
                let that = this;
                let fontFamily = detectFont(that);

                console.log(fontFamily);
            });
        } else {
            selector.unbind('mouseenter');
        }
    });

});