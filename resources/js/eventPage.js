import $ from 'jquery';

$(function () {

    let chrome = window.chrome;

    chrome.browserAction.onClicked.addListener(() => {
        alert('trigger');
    });
});
