// Appel des fonctions
import { recipes } from "./Data/recipes.js";

//importe l'affichage des recettes
import { displayRecipes } from "./Utils/displayRecipe.js";
displayRecipes(recipes);

//importe le dropdown
import { OnlyOneDropdown } from "./Utils/onlyOneDropdown.js";
OnlyOneDropdown();

import { search } from "./Utils/search.js";
const inputElement = document.getElementById("search");
search(inputElement);

//importer la liste des ingrédients des  appareils et des ustensiles
import {
  appareilInsert,
  ingredientInsert,
  ustensilsInsert,
} from "./Utils/insertOption.js";
ingredientInsert();
appareilInsert();
ustensilsInsert();

import { handleDropdownSearch } from "./Utils/dropdownSearch.js";
handleDropdownSearch();

import { updateRecipeCount } from "./Utils/updateCount.js";
updateRecipeCount(recipes);
