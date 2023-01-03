chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        var res = "https://translate.google.com/translate?sl=auto&tl=" + navigator.language + "&u=" + tabs[0].url
        chrome.tabs.create({ url: res });
    });
});
