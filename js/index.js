import { recipes } from "/js/Data/recipes.js";

import { displayRecipes } from "/js/Templates/recipe-card.js";
// Appel des fonctions
displayRecipes(recipes);

// Debug
import { logInputValue } from "/js/Data/input-data.js";
logInputValue();

import { getSearch } from "/js/Utils/search.js";
getSearch();

import { searchRecipes } from "/js/Utils//FilterSearch.js";
searchRecipes();

//importe le dropdown
import { handleDropdown } from "/js/Utils/dropdownList.js";
handleDropdown();
// Import les liste filtrées pour les select
import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "/js/Data/filter-data-list.js";
getIngredients();
getAppareil();
getUstensils();

//importer la liste des ingrédients des  appareils et des ustensiles
import {
  appareilInsert,
  ingredientInsert,
  ustensilsInsert,
} from "/js/Templates/list-select.js";
ingredientInsert();
appareilInsert();
ustensilsInsert();
