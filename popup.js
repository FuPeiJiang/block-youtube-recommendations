const elementIds = ["recommendations", "comments", "liveChat"]

chrome.storage.sync.get(null, (settingsObj) => {
    // console.log(settingsObj)
    for (let i = 0; i < elementIds.length; i++) {
        idName = elementIds[i]
        const hideWhat = "hide-" + idName

        const checkbox_element = document.getElementById(idName)
        checkbox_element.checked = settingsObj[hideWhat]
        checkbox_element.addEventListener('change', returnEventListener(hideWhat))
    }
})

function returnEventListener(hideWhat) {
    return function (event) {
        updateAll(hideWhat, event.currentTarget.checked)
    }
}

function updateAll(hideWhat, trueOrFalse) {
    chrome.storage.sync.set({ [hideWhat]: trueOrFalse })


    chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, [hideWhat, trueOrFalse])
        }

    })

}
