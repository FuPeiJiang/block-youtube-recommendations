console.log("block-youtube-recommendations: Hello, World!")

chrome.storage.sync.get(null, (settingsObj) => {
    console.log(settingsObj)
    keys = Object.keys(settingsObj)
    for (let i = 0; i < keys.length; i++) {

        const hideWhat = keys[i]
        const trueOrFalse = settingsObj[hideWhat]

        hideOrShow(hideWhat, trueOrFalse)
    }
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("GOTTEN REQUEST:", request)
    hideOrShow(...request)
})

function hideOrShow(hideWhat, trueOrFalse) {
    document.documentElement.setAttribute(hideWhat,trueOrFalse)
}
