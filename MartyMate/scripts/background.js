let problemData = {}; // Placeholder for storing data
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action == 'updatePageContent'){
        problemData = message;
    }
    if (message.action == 'getProblemData') {
        await sendResponse(problemData)
    }
    if(message.action == 'closePopup') {
        chrome.windows.remove(chrome.tabs.query({ active: true }, (tabs) => tabs[0].windowId));
    }
});
