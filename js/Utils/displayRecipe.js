// Importez les dépendances nécessaires
import { generateRecipeHTML } from "../Templates/recipe-card.js";

// Récupérez la div qui contiendra les recettes
const recipeContainer = document.querySelector(".recipes");

const displayRecipes = (recipes) => {
  // Si aucune recette n'est fournie, affichez un message
  if (!recipes || recipes.length === 0) {
    recipeContainer.innerHTML = "Aucune recette trouvée. Veuillez réessayer.";
    return;
  }
  // si des recettes sont trouvées, générez le HTML pour chaque recette
  const recipesHTML = recipes
    .map((recipe) => generateRecipeHTML(recipe))
    .join("");
  recipeContainer.innerHTML = recipesHTML;
};

function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}
// Exportez la fonction displayRecipes
export { displayRecipes, updateRecipeCount };
