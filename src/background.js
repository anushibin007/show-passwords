chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});

chrome.runtime.onMessage.addListener((message, sender) => {
  console.log("Received message:", message);

  if (message.action === "updateIcon") {
    // const iconPath = message.showing ? "icons/showing.png" : "icons/hidden.png";
    const iconPath = message.showing
      ? {
          16: "icons/icon16.png",
          32: "icons/icon32.png",
          48: "icons/icon48.png",
          128: "icons/icon128.png",
        }
      : {
          16: "icons/closed/icon16.png",
          32: "icons/closed/icon32.png",
          48: "icons/closed/icon48.png",
          128: "icons/closed/icon128.png",
        };

    if (sender.tab && sender.tab.id) {
      chrome.action.setIcon({ path: iconPath, tabId: sender.tab.id });
    } else {
      // fallback: get active tab
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.action.setIcon({ path: iconPath, tabId: tabs[0].id });
        }
      });
    }
  }
});
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-passwords") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        });
      }
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open-popup",
    title: "Set your own Keyboard Shortcut",
    contexts: ["action"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-popup") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 300,
      height: 400,
    });
  }
});
