// console.log("HOLA##########################################################HOLA")

var styleEl = document.createElement('style')
styleEl.textContent = `ytd-rich-grid-renderer,ytd-watch-next-secondary-results-renderer,ytd-comments,ytd-live-chat-frame{
  display:none !important
}`
document.documentElement.appendChild(styleEl)
// yt-live-chat-renderer

// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
// "run_at": "document_start",
