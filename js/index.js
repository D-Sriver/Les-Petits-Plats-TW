// Appel des fonctions
import { recipes } from "./Data/recipes.js";

//importe l'affichage des recettes
import { displayRecipes } from "./Utils/displayRecipe.js";
displayRecipes(recipes);

//importe l'input de recherche
import { getSearch } from "./Utils/search.js";
getSearch();

//importe la fonction searchRecipes
import { searchRecipes } from "./Utils//FilterSearch.js";
searchRecipes();

//importe le dropdown
import { handleDropdown } from "./Utils/dropdownList.js";
handleDropdown();

//importer la liste des ingrédients des  appareils et des ustensiles
import {
  appareilInsert,
  ingredientInsert,
  ustensilsInsert,
} from "./Templates/list-select.js";
ingredientInsert();
appareilInsert();
ustensilsInsert();

import { addTag } from "./Templates/tag.js";
addTag();

import { updateRecipeCount } from "/js/Utils/filterSearch.js";
updateRecipeCount(recipes);

// Debug
import { logInputValue } from "./Data/input-data.js";
logInputValue();

import { handleDropdownSearch } from "./Utils/dropdownSearch.js";

handleDropdownSearch();
