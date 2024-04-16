import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";

let filteredRecipes = [...recipes]; // créer une copie des recettes

export function filterRecipes(searchTerm) {
  // Je crée un tableau avec les termes de recherche
  const combinedSearchTerms = [...UserData, searchTerm];
  filteredRecipes = [...recipes]; // je réinitialise les recettes filtrées

  // je filtre les recettes en fonction des termes de recherche
  combinedSearchTerms.forEach((term) => {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      // Vérifie si le terme de recherche est présent dans le nom de la recette
      const recipeNameLower = recipe.name.toLowerCase();
      if (recipeNameLower.includes(term.toLowerCase())) {
        return true;
      }

      if (
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(term.toLowerCase())
        )
      ) {
        return true;
      }

      if (recipe.appliance.toLowerCase().includes(term.toLowerCase())) {
        return true;
      }

      if (
        recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(term.toLowerCase())
        )
      ) {
        return true;
      }

      return false;
    });
  });

  return filteredRecipes;
}
