// dropdown.js

// Définir une fonction pour gérer le dropdown
export function handleDropdown() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  document.addEventListener("click", function (event) {
    dropdownBtns.forEach(function (dropdownBtn) {
      const dropdownList = dropdownBtn.nextElementSibling;
      if (
        !dropdownBtn.contains(event.target) &&
        !dropdownList.contains(event.target)
      ) {
        if (!dropdownList.classList.contains("hidden")) {
          dropdownList.classList.add("hidden");
        }
      }
    });
  });

  dropdownBtns.forEach(function (dropdownBtn) {
    const dropdownList = dropdownBtn.nextElementSibling;

    dropdownBtn.addEventListener("click", function () {
      dropdownList.classList.toggle("hidden");
    });
  });
}
