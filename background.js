// listen message from content-script 
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "closeTab") {
    // close current tab
    browser.tabs.remove(sender.tab.id);
  }
});

