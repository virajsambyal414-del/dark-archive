// LOADING SCREEN

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }
    }, 900);
});


// SEARCH SYSTEM

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".archive-card");
const filters = document.querySelectorAll(".filter");
const noResults = document.getElementById("noResults");

let currentFilter = "all";

function filterArchives() {

    const searchText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = text.includes(searchText);

        const matchesCategory =
            currentFilter === "all" || category === currentFilter;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    if (noResults) {
        noResults.style.display =
            visibleCount === 0 ? "block" : "none";
    }
}


// SEARCH INPUT

if (searchInput) {
    searchInput.addEventListener("input", filterArchives);
}


// CATEGORY FILTERS

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        filterArchives();

    });

});