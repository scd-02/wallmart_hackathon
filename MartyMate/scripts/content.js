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
            appendGenerateDialog(productTitle);
            appendShowCaseDialog();
            // scrapeInfo(document);
        }
    }, 100);
}

function appendTailwindScript() {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = "styles/output.css";

    document.head.appendChild(link);
}

function appendShowCaseDialog() {
    const div = document.createElement('div');
    div.classList.add('fixed', 'bottom-4', 'right-4', 'w-16', 'h-16', 'bg-blue-500', 'rounded-full', 'flex', 'items-center', 'justify-center', 'hover:cursor-pointer', 'z-50');
    document.body.appendChild(div)
    // Create the main container div
    const mainContainer = document.createElement('div');

    // Create the carousel container div
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel', 'carousel-vertical', 'rounded-box', 'h-96', 'fixed', 'bottom-24', 'right-4');
    carouselContainer.onmouseover = handleMouseOver;
    carouselContainer.onmouseout = handleMouseOut;

    // Create carousel items
    const carouselItems = [
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
        'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
        'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
        'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ];

    carouselItems.forEach((itemSrc) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item', 'h-full');

        const img = document.createElement('img');
        img.src = itemSrc;

        carouselItem.appendChild(img);
        carouselContainer.appendChild(carouselItem);
    });

    // Create the like button
    const likeButton = document.createElement('img');
    likeButton.classList.add('absolute', 'bottom-6', 'right-4');
    likeButton.src = 'resources/heart.png';
    likeButton.alt = 'like-button';
    likeButton.height = '24px';
    likeButton.width = '24px';

    // Create the like count
    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count', 'absolute', 'bottom-1', 'right-5', 'font-bold', 'text-gray-100', 'text-sm');
    likeCount.textContent = '14';

    // Append the like button and like count to the first carousel item
    carouselContainer.firstChild.appendChild(likeButton);
    carouselContainer.firstChild.appendChild(likeCount);

    // Create the round div
    const roundDiv = document.createElement('div');
    roundDiv.classList.add('round-div', 'bg-blue-500', 'w-14', 'h-14', 'fixed', 'bottom-4', 'right-4', 'rounded-full', 'hover:cursor-pointer');
    roundDiv.onclick = handleDiagClick;

    // Append the carousel container and round div to the main container
    mainContainer.appendChild(carouselContainer);
    mainContainer.appendChild(roundDiv);

    // Append the main container to the document body
    document.body.appendChild(mainContainer);
}

function appendGenerateDialog(productTitle) {
    const div = document.createElement('form');
    div.innerHTML = `
         <form class="max-w-md mx-auto pb-12">  
            <p class="text-[12px] ps-1 text-opacity-85 text-gray-500 font-bold dark:text-gray-500">Powered by MartyMate</p> 
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <input type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Customize the product" required />
                <button type="submit" id="searchButton" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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

function handleSearch() {
    const searchBox = div.querySelector('#searchBox');
    const searchTerm = searchBox.value;
    // Perform search logic here
    console.log('Search term:', searchTerm);
}

function scrapeInfo(document, query) {
    const brand = document.querySelector('#maincontent > section > main > div.flex.flex-column.h-100 > div:nth-child(2) > div > div.w_aoqv.w_wRee.w_fdPt > div > div:nth-child(2) > div a').innerText
    const productName = document.querySelector('#maincontent > section > main > div.flex.flex-column.h-100 > div:nth-child(2) > div > div.w_aoqv.w_wRee.w_fdPt > div > div:nth-child(2) > div h1').innerText
    const productDescription = document.querySelector('#product-description-section .mb3').innerText
    const productSpecification = document.querySelector('#product-description-section .mb3').innerText
    console.log("Description: ", productDescription)

}

