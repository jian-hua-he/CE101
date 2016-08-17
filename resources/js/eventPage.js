import $ from 'jquery';

$(() => {

    let chrome = window.chrome;
    let switchOn = false;

    chrome.browserAction.onClicked.addListener((tab) => {
        switchOn = !switchOn;

        chrome.tabs.sendMessage(tab.id, {switchOn: switchOn}, (response) => {
            console.log(response);
        });
    });
});
