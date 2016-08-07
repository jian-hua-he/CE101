import $ from 'jquery';

$(function () {

    let chrome = window.chrome;
    let switchOn = false;

    chrome.browserAction.onClicked.addListener(() => {
        switchOn = !switchOn;

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {switchOn: switchOn}, (response) => {
                console.log(response);
            });
        });
    });
});
