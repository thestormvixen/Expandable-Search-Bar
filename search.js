const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-input");

console.log(searchBtn, searchInput);

// Creates/toggles new class for button when click icon
searchBtn.addEventListener("click", function() {
 searchInput.classList.toggle("active-search");
 console.log(searchInput);
})

// Removes new class for button when click outside icon
document.querySelector("main").addEventListener("click", () => {
 searchInput.classList.remove("active-search");
})