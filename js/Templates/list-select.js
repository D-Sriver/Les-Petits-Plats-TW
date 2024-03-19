// Import des données
import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "../data/filter-data-list.js";

function insertOptions(optionsList, items) {
  items.forEach((item) => {
    const option = document.createElement("li");
    option.classList.add("rounded-xl");

    const paragraph = document.createElement("p");
    paragraph.classList.add(
      "flex",
      "justify-center",
      "m-3",
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
