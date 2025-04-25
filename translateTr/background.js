chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateToTurkish",
    title: "Translate to Turkish",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateToTurkish") {
    const query = encodeURIComponent(info.selectionText);
    const url = `https://translate.google.com/?sl=en&tl=tr&text=${query}&op=translate`;
    chrome.tabs.create({ url: url });
  }
});