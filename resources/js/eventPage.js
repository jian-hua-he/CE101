import $ from 'jquery';

$(() => {

    let chrome = window.chrome;
    let currentStatus = false;

    chrome.browserAction.onClicked.addListener((tab) => {
        chrome.tabs.sendMessage(tab.id, {active: !currentStatus}, (response) => {
            currentStatus = !currentStatus;
        });
    });
});
