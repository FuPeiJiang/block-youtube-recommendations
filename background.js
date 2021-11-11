/* chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        chrome.scripting.executeScript({
            
            target: { tabId },
            function: setPageBackgroundColor,
        })

    }
})

function setPageBackgroundColor() {
    document.body.style.backgroundColor = "green"
} */

const default_recommendations = true
const default_comments = false

chrome.storage.sync.get(null, (settingsObj) => {
    settingsObj["hide-recommendations"] = settingsObj["hide-recommendations"] || default_recommendations
    settingsObj["hide-comments"] = settingsObj["hide-comments"] || default_comments
    chrome.storage.sync.set(settingsObj)
})