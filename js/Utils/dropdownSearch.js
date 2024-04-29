// dropdownSearch.js

export function handleDropdownSearch() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(function (dropdownBtn) {
    const dropdownList = dropdownBtn.nextElementSibling;
    const searchInput = dropdownList.querySelector(".search-input");

    // Ajouter un écouteur d'événement sur l'input pour détecter les changements
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const items = dropdownList.querySelectorAll("li:not(:first-child)");

      items.forEach(function (item) {
        const text = item.textContent.toLowerCase().trim();
        if (text.includes(searchTerm)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}
