// Importez les dépendances nécessaires
import { generateRecipeHTML } from "../Templates/recipe-card.js";

// Récupérez la div qui contiendra les recettes
const recipeContainer = document.querySelector(".recipes");

// Affichez les recettes
const displayRecipes = (recipes) => {
  const recipesToDisplay = recipes ? recipes : recipes;
  recipeContainer.innerHTML = "";
  // Affichez les recettes
  recipesToDisplay.forEach((recipe) => {
    const recipeHTML = generateRecipeHTML(recipe);
    recipeContainer.innerHTML += recipeHTML;
  });
};

// Exportez la fonction displayRecipes
export { displayRecipes };
