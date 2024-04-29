import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";

let filteredRecipes = [...recipes]; // créer une copie des recettes

function filterRecipes(searchTerm) {
  const combinedSearchTerms = [...UserData];

  if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
    combinedSearchTerms.push(searchTerm.trim());
  }

  let filteredRecipes = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    let matchFound = false;

    for (let j = 0; j < combinedSearchTerms.length; j++) {
      const term = combinedSearchTerms[j].toLowerCase();

      if (
        recipe.name.toLowerCase().includes(term) ||
        recipe.appliance.toLowerCase().includes(term) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(term)
        ) ||
        recipe.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(term)
        )
      ) {
        matchFound = true;
        break;
      }
    }

    if (matchFound) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

export { filterRecipes };
