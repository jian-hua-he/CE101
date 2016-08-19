import $ from 'jquery';
import FontClipper from './modules/FontClipper';

$(() => {

    let chrome = window.chrome;
    let fontClipper = new FontClipper;

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.active) {
            fontClipper.enable();
        } else {
            fontClipper.disable();
        }
    });

});