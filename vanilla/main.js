const API_URL =
  "https://pixabay.com/api/?key=11323359-8da1b3658bbbe06ee4b89d361&image_type=photo";
const from = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");
const prevNext = document.querySelector(".prevNext");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let page;
loadingImage.style.display = "none";
from.addEventListener("submit", formSubmitted);
prev.addEventListener("click", prevPage);
next.addEventListener("click", nextPage);

function formSubmitted(event) {
  event.preventDefault();
  page = 1;
  loadResult(page);
}

function loadResult(page) {
  if (page === 1) {
    prev.disabled = "disabled";
  } else {
    prev.disabled = "";
  }
  const searchInput = input.value;
  search(searchInput, page)
    .then(displayImages)
    .then(showPrevNext);
}

function search(searchInput, page) {
  const url = `${API_URL}&q=${searchInput}&page=${page}`;
  loadingImage.style.display = "";
  return fetch(url)
    .then(response => response.json())

    .then(result => {
      if (page === result.totalHits / 20) {
        next.disabled = "disabled";
      } else {
        next.disabled = "";
      }
      return result.hits;
    });
}

function displayImages(images) {
  imageSection.innerHTML = "";
  images.forEach(image => {
    const imageElement = document.createElement("img");
    imageElement.src = image.largeImageURL;
    imageSection.append(imageElement);
  });
  loadingImage.style.display = "none";
}

function showPrevNext() {
  prevNext.style.display = "block";
}

function prevPage() {
  page--;

  loadResult(page);
}
function nextPage() {
  page++;

  loadResult(page);
}
