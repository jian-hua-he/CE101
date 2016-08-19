import $ from 'jquery';
import { detectFont, supportedFonts } from 'detect-font';

$(() => {

    let chrome = window.chrome;

    let selector = $('h1, h2, h3, h4, h5, h6, p, a, span');
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.active) {
            selector.on('mouseenter', (e) => {
                let fontFamily = detectFont(e.target);

                console.log(fontFamily);
            });
        } else {
            selector.unbind('mouseenter');
        }
    });

});