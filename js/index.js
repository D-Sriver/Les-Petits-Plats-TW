// Appel des fonctions
import { recipes } from "/js/Data/recipes.js";

//importe l'affichage des recettes
import { displayRecipes } from "/js/Templates/recipe-card.js";
displayRecipes(recipes);

//importe l'input de recherche
import { getSearch } from "/js/Utils/search.js";
getSearch();

//importe la fonction searchRecipes
import { searchRecipes } from "/js/Utils//FilterSearch.js";
searchRecipes();

//importe le dropdown
import { handleDropdown } from "/js/Utils/dropdownList.js";
handleDropdown();

//importer la liste des ingrédients des  appareils et des ustensiles
import {
  appareilInsert,
  ingredientInsert,
  ustensilsInsert,
} from "/js/Templates/list-select.js";
ingredientInsert();
appareilInsert();
ustensilsInsert();

import { addTag } from "/js/Templates/tag.js";
addTag();

import { updateRecipeCount } from "/js/Utils/filterSearch.js";
updateRecipeCount(recipes);

// Debug
import { logInputValue } from "/js/Data/input-data.js";
logInputValue();

import { handleDropdownSearch } from "/js/Utils/dropdownSearch.js";

handleDropdownSearch();
