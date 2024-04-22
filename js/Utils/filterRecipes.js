import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";

let filteredRecipes = [...recipes]; // créer une copie des recettes

export function filterRecipes(searchTerm) {
  // Je crée un tableau avec les termes de recherche
  const combinedSearchTerms = [...UserData];

  // Vérifier si searchTerm est défini et est une chaîne de caractères
  if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
    combinedSearchTerms.push(searchTerm.trim());
  }

  // Réinitialiser les recettes filtrées
  let filteredRecipes = [...recipes];

  // je filtre les recettes en fonction des termes de recherche
  combinedSearchTerms.forEach((term) => {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      let matchFound = false;

      switch (true) {
        case recipe.name.toLowerCase().includes(term.toLowerCase()):
          matchFound = true;
          break;
        case recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(term.toLowerCase())
        ):
          matchFound = true;
          break;
        case recipe.appliance.toLowerCase().includes(term.toLowerCase()):
          matchFound = true;
          break;
        case recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(term.toLowerCase())
        ):
          matchFound = true;
          break;
        default:
          matchFound = false;
      }

      // Retourner le résultat du filtre
      return matchFound;
    });
  });

  return filteredRecipes;
}
