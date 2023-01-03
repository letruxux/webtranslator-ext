chrome.action.onClicked.addListener(function (tab) {
    translatelink = "https://translate.google.com/translate?sl=auto&tl=it&u=";
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let link = tabs[0].url;
        chrome.tabs.create({ url: translatelink.concat(link) });
    });
});