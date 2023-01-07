chrome.action.onClicked.addListener(function (tab) 
      {chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => 
            {chrome.tabs.create({ url: 
                  "https://translate.google.com/translate?sl=auto&tl=" + 
                  navigator.language + 
                  "&u=" + 
                  tabs[0].url 
            }); 
      });
});
