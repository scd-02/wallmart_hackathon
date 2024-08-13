let problemData = {}; // Placeholder for storing data
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action == 'sendProductDetails'){
        console.log("Message is", message);
        await fetch('http://localhost:3000/extension', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        }).then((response) => {
            if(response.ok) {
                const data = response;
                console.log("Response was ok:" + data)
            } else {
                console.log("POST Failed");
            }
        })

    }
});

function postMessage() {

}
