chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "beforeTranslate") {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content_scripts/sanitize.js"],
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "beforeTranslate",
    title: "日本語に翻訳する前に...",
    contexts: ["page"],
  });
});
