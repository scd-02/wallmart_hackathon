
document.getElementById("save_button").addEventListener("click", saveContentToSheet)


chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    console.log("A scripting event was initiated");
    await chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['scripts/content.js']
    }).then(() => {
        setTimeout(() => {
            chrome.runtime.sendMessage({ action: 'getProblemData' }, (response) => {
                console.log("Response received from scripting:", response);
                displayData(response)
            });
        }, 100);
    });
});

let problemURL = "";

function displayData(data) {
    console.log(data.problemTitle, data.problemURL, data.problemDifficulty);
    document.getElementById('title').textContent = data.problemTitle;
    problemURL = data.problemURL;
    document.getElementById('difficulty').textContent = data.problemDifficulty;
    document.getElementById('sheet_url').href = "https://docs.google.com/spreadsheets/d/" + localStorage.getItem("sheetId") + "/";
    if (data.platform == 'leetcode') {
        document.getElementById('leetcode-1').style.display = 'inline';
        document.getElementById('leetcode-2').style.display = 'inline';
    } else if (data.platform == 'geeksforgeeks') {
        document.getElementById('geeksforgeeks').style.display = 'inline';
    }
}

function saveContentToSheet() {
    let problemTitle = document.getElementById('title').textContent;
    let problemTag = document.getElementById('tag').value;
    let problemDifficulty = document.getElementById('difficulty').textContent;
    let problemApproach = document.getElementById('notes').value;

    const responseJSON = `
    {
    "majorDimension": "COLUMNS",
    "range": "`+ problemTag +`",
    "values": [
        [
        "`+ problemTitle +`"
        ],
        [
        "`+ problemURL +`"
        ],
        [
        "`+ problemDifficulty +`"
        ],
        [
        "`+ problemApproach +`"
        ]
        
    ]
}
    `

    chrome.identity.getAuthToken({interactive: true}, function(token) {
        let init = {
            method: 'POST',
            async: true,
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json'
            },
            body: responseJSON
            
        };
        const url = `https://sheets.googleapis.com/v4/spreadsheets/` + localStorage.getItem('sheetId') + `/values/`+ problemTag +`:append?valueInputOption=USER_ENTERED&key=` + process.env.key
        fetch(url,init)
            .then(() => {
              document.getElementById('save_button').textContent = "Saved"
              document.getElementById('save_button').style.pointerEvents = 'none';
            })
      });
}