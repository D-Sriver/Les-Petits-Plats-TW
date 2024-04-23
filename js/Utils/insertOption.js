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

function updateDropdownOptions(filteredRecipes) {
  const uniqueAppareils = new Set();
  const uniqueIngredients = new Set();
  const uniqueUstensils = new Set();

  // Parcourir les recettes filtrées pour extraire les appareils, ingrédients et ustensiles uniques
  filteredRecipes.forEach((recipe) => {
    uniqueAppareils.add(recipe.appliance);
    recipe.ingredients.forEach((ingredient) =>
      uniqueIngredients.add(ingredient.ingredient)
    );
    recipe.ustensils.forEach((ustensil) => uniqueUstensils.add(ustensil));
  });

  // Mettre à jour les options des dropdowns avec les éléments uniques
  const categoryElementIngredient = document.querySelector(
    ".inline-block:nth-child(1)"
  );
  const categoryElementAppareil = document.querySelector(
    ".inline-block:nth-child(2)"
  );
  const categoryElementUstensil = document.querySelector(
    ".inline-block:nth-child(3)"
  );

  insertCategory(categoryElementAppareil, Array.from(uniqueAppareils));
  insertCategory(categoryElementIngredient, Array.from(uniqueIngredients));
  insertCategory(categoryElementUstensil, Array.from(uniqueUstensils));
}

export {
  appareilInsert,
  ingredientInsert,
  updateDropdownOptions,
  ustensilsInsert,
};
