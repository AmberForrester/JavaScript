const accessKey = "RbgXjFxXE5tk0Nzfss89hkFFPZekxEBbJJDyBAEN7N8";

const formEl = document.querySelector("form");

const searchInputEl = document.getElementById("search-input");

const searchResultsEl = document.querySelector(".search-results");

const showMoreButtonEl = document.getElementById("show-more-button");

let page = 1;




async function fetchAndDisplayResults(page) {

  const inputData = searchInputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);

  const data = await response.json();

  if (page === 1) {

    searchResultsEl.innerHTML = "";
  }

  const results = data.results;

  results.forEach((result) => {

    const imageWrapper = document.createElement("div");

    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");

    image.src = result.urls.small;

    image.alt = result.alt_description;



    const imageLink = document.createElement("a");

    imageLink.href = result.links.html;

    imageLink.target = "_blank";

    imageLink.textContent = result.alt_description;




    imageWrapper.appendChild(image);

    imageWrapper.appendChild(imageLink);

    searchResultsEl.appendChild(imageWrapper);
  });




  if (results.length > 0) {

    showMoreButtonEl.style.display = "block";

  } else {

    showMoreButtonEl.style.display = "none";
  }
}




formEl.addEventListener("submit", (event) => {

  event.preventDefault();

  page = 1;

  fetchAndDisplayResults(page);
});




showMoreButtonEl.addEventListener("click", () => {

  page++;

  fetchAndDisplayResults(page);
});









