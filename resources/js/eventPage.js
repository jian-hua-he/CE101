import $ from 'jquery';

$(() => {

    let chrome = window.chrome;
    let active = false;

    chrome.browserAction.onClicked.addListener((tab) => {
        chrome.tabs.sendMessage(tab.id, {active: active}, (response) => {
            active = !active;
        });
    });
});
