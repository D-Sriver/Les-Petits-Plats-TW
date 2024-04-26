import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";

let filteredRecipes = [...recipes]; // créer une copie des recettes

function filterRecipes(searchTerm) {
  const combinedSearchTerms = [...UserData];

  if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
    combinedSearchTerms.push(searchTerm.trim());
  }

  let filteredRecipes = [...recipes];

  for (let i = 0; i < combinedSearchTerms.length; i++) {
    const term = combinedSearchTerms[i].toLowerCase();

    filteredRecipes = filteredRecipes.filter((recipe) => {
      let matchFound = false;

      if (recipe.name.toLowerCase().includes(term)) {
        matchFound = true;
      } else if (recipe.appliance.toLowerCase().includes(term)) {
        matchFound = true;
      } else if (
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(term)
        )
      ) {
        matchFound = true;
      } else if (
        recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(term)
        )
      ) {
        matchFound = true;
      }

      return matchFound;
    });
  }

  return filteredRecipes;
}

export { filterRecipes };
