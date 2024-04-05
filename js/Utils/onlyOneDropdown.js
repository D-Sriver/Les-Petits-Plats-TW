function OnlyOneDropdown() {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");
  document.addEventListener("click", function (event) {
    dropdownBtns.forEach(function (dropdownBtn) {
      const dropdownList = dropdownBtn.nextElementSibling;
      // Si l'élément cliqué n'est pas le bouton ni la liste déroulante
      if (
        !dropdownBtn.contains(event.target) &&
        !dropdownList.contains(event.target)
      ) {
        // Alors on cache la liste déroulante
        if (!dropdownList.classList.contains("hidden")) {
          dropdownList.classList.add("hidden");
        }
        // réinitialise l'apparence
        dropdownBtn.classList.remove("rounded-b-none");
      }
    });
  });

  dropdownBtns.forEach(function (dropdownBtn) {
    // Récupérer la liste déroulante
    const dropdownList = dropdownBtn.nextElementSibling;
    // Ajouter un écouteur d'événement sur le bouton
    dropdownBtn.addEventListener("click", function () {
      // Afficher ou cacher la liste déroulante
      dropdownList.classList.toggle("hidden");
      dropdownList.classList.toggle("rounded-b-xl");
      dropdownBtn.classList.toggle("rounded-b-none");
    });
  });
}

export { OnlyOneDropdown };
