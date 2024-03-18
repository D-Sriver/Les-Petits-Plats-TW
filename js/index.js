import { displayRecipes } from "/js/Templates/recipe-card.js";

// Appel des fonctions
displayRecipes();

// Debug
import { logInputValue } from "/js/Data/input-data.js";
logInputValue();

// Import les liste filtrées pour les select
import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "/js/Data/filter-data-list.js";
getIngredients();
getAppareil();
getUstensils();
