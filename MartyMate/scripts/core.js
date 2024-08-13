require('dotenv').config();

document.addEventListener('DOMContentLoaded', handleUserSuggestion);

function handleUserSuggestion() {
  
}


function handleUnsupportedPage() {
  // Assuming you're developing a browser extension
  // Check if the current environment supports the browser or chrome API
  const api = typeof browser !== 'undefined' ? browser : chrome;

  api.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const contentArea = document.querySelector('body'); // Assuming you want to modify the content inside <body>

    if (!url.includes('leetcode.com') && !url.includes('geeksforgeeks.org')) {
      // Clear existing content
      contentArea.innerHTML = `
        <body style="background: linear-gradient(to right, #38bdf8, #6366f1); display: flex; justify-content: center; align-items: center;">
        <div style="background: #fff; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); padding: 2rem; width: 18.75rem; display: flex; flex-direction: column; gap: 1rem;">
          <img src="../resources/not_supported.svg" style="font-size: 1.875rem; font-weight: bold; text-align: center; color: #1f2937;" />
          <p style="color: #4b5563; text-align: center;">Sorry, Code Clipper does not support this page.</p>
        </div>
        </body>
        `;
    }
    else if (!url.includes('/problems/')) {
      contentArea.innerHTML = `
        <body style="background: linear-gradient(to right, #38bdf8, #6366f1); display: flex; justify-content: center; align-items: center;">
        <div style="background: #fff; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); padding: 2rem; width: 18.75rem; display: flex; flex-direction: column; gap: 1rem;">
          <h1 style="font-size: 1.875rem; font-weight: bold; text-align: center; color: #1f2937;">Start solving!</h1>
          <p style="color: #4b5563; text-align: center;">Open a problem to clip it.</p>

        </div>
        </body>
        `;
    }
  });
}

function handleDiagClick() {
  console.log("I was clicked");
}

function handleMouseOver() {
  const masterDiv = document.querySelector('.carousel');
  if(masterDiv){
    masterDiv.classList.add('opacity-50');
  }
}

function handleMouseOut() {
  const masterDiv = document.querySelector('.carousel');
  if(masterDiv) {
    masterDiv.classList.remove('opacity-50');
  }
}
