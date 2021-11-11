const elementIds = ["recommendations", "comments", "liveChat"]


/* const checkbox_recommendations = document.getElementById("recommendations")
const checkbox_comments = document.getElementById("comments")
const checkbox_liveChat = document.getElementById("liveChat")
 */
// ytd-rich-grid-renderer,ytd-watch-next-secondary-results-renderer,ytd-comments,ytd-live-chat-frame{
/* const settingsToSelector_Obj = {
    recommendations: ".ytd-rich-grid-renderer, .ytd-watch-next-secondary-results-renderer",
    comments: ".ytd-comments",
} */

chrome.storage.sync.get(null, (settingsObj) => {

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

    // const elementSelector = settingsToSelector_Obj[whichSetting]

    chrome.tabs.query({}, function (tabs) {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, [hideWhat, trueOrFalse])
        }

    })

    /* chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
    console.log(response.farewell)
    })
    }) */

    /* chrome.tabs.query({}, function (tabs) {
        // var message = { foo: bar }
        for (let i = 0; i < tabs.length; i++) {
            console.log(tabs[i])
            // chrome.tabs.sendMessage(tabs[i].id, { elementSelector, hideOrNo })
            chrome.scripting.executeScript({
                target: { tabId: tabs[i].id },
                function: setPageBackgroundColor,
            })
        }
    }) */
}

/* chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
        })

    }
})

function setPageBackgroundColor() {
    document.body.style.backgroundColor = "green"
} */
