import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "../Data/filter-data-list.js";
import { insertCategory } from "../Templates/list-select.js";

function ingredientInsert() {
  const categoryElement = document.querySelector(".inline-block:nth-child(1)");
  const ingredients = getIngredients();
  insertCategory(categoryElement, ingredients);
}

function appareilInsert() {
  const categoryElement = document.querySelector(".inline-block:nth-child(2)");
  const appareils = getAppareil();
  insertCategory(categoryElement, appareils);
}

function ustensilsInsert() {
  const categoryElement = document.querySelector(".inline-block:nth-child(3)");
  const ustensils = getUstensils();
  insertCategory(categoryElement, ustensils);
}

export { appareilInsert, ingredientInsert, ustensilsInsert };
