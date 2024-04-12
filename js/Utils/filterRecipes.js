//TODO:  fetch data , create [] -> créer copie (résultat recherche + manip) -> recuperation initiale du [] pour filtrer le tableau.
//TODO: boucler sur les mot multiples.
import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";

// Fonction pour filtrer les recettes en fonction de sortedAppareils, sortedIngredients et sortedUstensils

export function filterRecipes(searchTerm) {
  // Combinez le terme de recherche de l'utilisateur avec les données extraites des clics précédents
  const combinedSearchTerms = [...UserData, searchTerm];
  const filteredRecipes = recipes.filter((recipe) => {
    return combinedSearchTerms.every(
      (term) =>
        recipe.name.toLowerCase().includes(term.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(term.toLowerCase())
        )
    );
  });

  return filteredRecipes;
}
