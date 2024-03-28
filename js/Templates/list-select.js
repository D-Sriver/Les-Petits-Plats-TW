// Import des données
import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "/js/Data/filter-data-list.js";

function insertOptions(optionsList, items) {
  items.forEach((item) => {
    const option = document.createElement("li");
    option.classList.add("rounded-xl");

    const paragraph = document.createElement("p");
    paragraph.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "h-13",
      "cursor-pointer",
      "text-ellipsis",
      "p-3",
      "bg-white",
      "hover:bg-yellow-400"
    );
    paragraph.textContent = item;

    option.appendChild(paragraph);
    optionsList.appendChild(option);
  });
}

// Fonction pour générer et insérer les options dans la catégorie
function insertCategory(categoryElement, items) {
  const optionsList = categoryElement.querySelector(".dropdown-list");
  optionsList.innerHTML = "";

  // Ajout du champ de recherche
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Rechercher...");
  searchInput.classList.add(
    "search-input",
    "m-0",
    "py-1",
    "w-full",
    "focus:outline-none"
  );

  //ajout du bouton de recherche
  const searchButton = document.createElement("button");
  searchButton.classList.add("search-button", "bg-white", "ml-2");
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fas", "fa-search");
  searchButton.appendChild(searchIcon);

  // ajout de la liste des options dans la catégorie associée
  const searchContainer = document.createElement("li");
  searchContainer.classList.add(
    "search-container",
    "flex",
    "top-0",
    "sticky",
    "border",
    "px-3",
    "py-1",
    "z-40",
    "bg-white"
  );
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  optionsList.appendChild(searchContainer);

  insertOptions(optionsList, items);
}

export function ingredientInsert() {
  const categoryElement = document.querySelector(".inline-block:nth-child(1)");
  const ingredients = getIngredients();
  insertCategory(categoryElement, ingredients);
}

export function appareilInsert() {
  const categoryElement = document.querySelector(".inline-block:nth-child(2)");
  const appareils = getAppareil();
  insertCategory(categoryElement, appareils);
}

export function ustensilsInsert() {
  const categoryElement = document.querySelector(".inline-block:nth-child(3)");
  const ustensils = getUstensils();
  insertCategory(categoryElement, ustensils);
}
