import { filterRecipes } from "./filterRecipes.js";
import { recipes } from "/js/Data/recipes.js";
import { displayRecipes } from "/js/Templates/recipe-card.js";

export function searchRecipes() {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchButton");

  //avec le clic
  searchButton.addEventListener("click", () => {
    console.log("click");
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredRecipes = filterRecipes(recipes, searchTerm);
    console.log("résultat de la recherche :", filteredRecipes);
    displayRecipes(filteredRecipes);
    updateRecipeCount(filteredRecipes);
  });
  //avec le clavier
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredRecipes = filterRecipes(recipes, searchTerm);
      console.log("résultat de la recherche :", filteredRecipes);
      displayRecipes(filteredRecipes);
      updateRecipeCount(filteredRecipes);
    }
  });
}
export function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}
