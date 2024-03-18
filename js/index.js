import { displayRecipes } from "./Templates/recipe-card.js";

// Appel des fonctions
displayRecipes();

// Debug
import { logInputValue } from "./Data/input-data.js";
logInputValue();

// Import les liste filtrées pour les select
import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "./Data/filter-data-list.js";
getIngredients();
getAppareil();
getUstensils();
