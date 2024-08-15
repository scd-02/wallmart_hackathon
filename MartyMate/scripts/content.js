// Scraping walmart product page
if (window.location.href.includes("https://www.walmart.com/ip/")) {
    console.log("Content.js was triggered by walmart product page");
    scrapeHandler();
}

function scrapeHandler() {

    const checkPageLoaded = setInterval(() => {
        console.log("Checking page")
        const productTitle = document.getElementById('main-title');
        if(productTitle) {
            clearInterval(checkPageLoaded);
            appendTailwindScript();
            appendShowCaseDialog();
            appendGenerateDialog(productTitle);
        }
    }, 100);
}

function appendTailwindScript() {
    // Appending tailwind CDN
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "styles/output.css";    
    document.head.appendChild(link);

    // Appending DaisyUI CDN
    const daisyUi = document.createElement('link');
    daisyUi.rel = "stylesheet";
    daisyUi.href = "styles/daisyUi.css";
    document.head.appendChild(daisyUi);
}

function appendShowCaseDialog() {
    const button = document.createElement('button');
    button.textContent = 'View Suggestions';
  
    // Assuming you have a CSS class defined with the name 'gradient-button'
    button.classList.add('gradient-button', 'bottom-4', 'right-4', 'fixed');
  
    document.body.appendChild(button);
  
}

function appendGenerateDialog(productTitle) {
    const div = document.createElement('form');
    div.id="generateForm";
    div.innerHTML = `
         <form class="max-w-md mx-auto pb-12">  
            <p class="text-[12px] ps-1 text-opacity-85 text-gray-500 font-bold dark:text-gray-500">Powered by MartyMate</p> 
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Customize the product" required />
                <button type="submit" id="searchButton" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>
    `;

    const searchButton = div.querySelector('#searchButton');
    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        const suggestionQuery = event.target.parentNode.querySelector('input').value;
        scrapeInfo(document, suggestionQuery);
    });

    productTitle.insertAdjacentElement('afterend', div);
}

async function scrapeInfo(document, customizationQuery) {
    
    // TODO: Simulate expansion of product details section to get the dire result
    
    // const productDescription = document.querySelector('#product-description-section .mb3').innerText
    // const productSpecification = document.querySelector('#product-description-section .mb3').innerText
    
    const brand = document.querySelector('#maincontent > section > main > div.flex.flex-column.h-100 > div:nth-child(2) > div > div.w_aoqv.w_wRee.w_fdPt > div > div:nth-child(2) > div a').innerText
    const productName = document.querySelector('#maincontent > section > main > div.flex.flex-column.h-100 > div:nth-child(2) > div > div.w_aoqv.w_wRee.w_fdPt > div > div:nth-child(2) > div h1').innerText
    const productDescription = 'Product description goes here';
    const productSpecification = 'Product specification goes here';
    const productImages = document.querySelector('img.noselect.db').src;
    uris = window.location.href.split('/')
    const productURL = uris[4] + '/' + uris[5].split('?')[0];

    // TODO: Fix - Response is always undefined
    chrome.runtime.sendMessage({brand, productName, productDescription, productSpecification, productImages, productURL, customizationQuery, action: 'sendProductDetails'}, (response) => {
        if (response && response.ok) {
            console.log("Successfully received response", response);
            console.log("Data was OK");
        } else {
            console.log("Something went wrong", response);
        }
    });

        const generateForm = document.getElementById('generateForm');
        console.log("Finding form");
        if (generateForm) {
            console.log("Found form");
            generateForm.innerHTML = `
                <div class="flex items-center justify-center mt-4">
                    <p class="text-gray-500">Thank you for suggesting</p>
                </div>
            `;
            setTimeout(() => {
                generateForm.remove();
            }, 2000);
        }
}

