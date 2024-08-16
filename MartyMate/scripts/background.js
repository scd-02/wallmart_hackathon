chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action == 'sendProductDetails') {
      console.log("Message is", message);
  
      try {
        await fetch('http://localhost:3000/api/extension/addExtensionData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(message)
        }).then((response) => {
            if (response.ok) {
                console.log("POST Successful");
                return response.json(); // Convert to JSON if necessary
            } else {
                console.log("POST Failed");
                return { error: 'POST failed' }; // Or send a more informative error message
            }
        }).then((data) => {
            sendResponse(data);
        })
        .catch((error) => {
            console.error("Error:", error);
            sendResponse({ error: 'An error occurred' });
        });
    }
    catch(err) {
        console.error("Server error: Unable to save data to db");
    }
    return true;
};

});
  

// function postMessage() {

// }
