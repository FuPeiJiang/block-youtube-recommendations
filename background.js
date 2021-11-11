const defaults = {
    "hide-recommendations": true,
    "hide-comments": false,
    "hide-liveChat": false,
}

chrome.storage.sync.get(null, (settingsObj) => {
    settingsObj["hide-recommendations"] = settingsObj["hide-recommendations"] || defaults["hide-recommendations"]
    settingsObj["hide-comments"] = settingsObj["hide-comments"] || defaults["hide-comments"]
    settingsObj["hide-liveChat"] = settingsObj["hide-liveChat"] || defaults["hide-liveChat"]
    chrome.storage.sync.set(settingsObj)
})