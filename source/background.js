chrome.action.onClicked.addListener(function (tab) {
    translatelink = "https://translate.google.com/translate?sl=auto&tl=";
    tr2 = "&u="
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        var res = translatelink.concat(navigator.language)
        var res = res.concat(tr2)
        var res = res.concat(tabs[0].url)
        chrome.tabs.create({ url: res });
    });
});
