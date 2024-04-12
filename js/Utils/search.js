// Importez les dépendances nécessaires
import { UserData } from "../Data/userData.js";
import { displayRecipes } from "./displayRecipe.js";
import { filterRecipes } from "./filterRecipes.js";
import { xssHtml } from "./xss.js";

// Déclarez une fonction pour rechercher les entrées de l'utilisateur
function search(inputElement) {
  inputElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const userInput = inputElement.value.trim();
      const cleanInput = xssHtml(userInput);
      if (userInput !== cleanInput) {
        return;
      }

      if (userInput !== "") {
        UserData.pop(userInput);
        UserData.push(userInput);
        console.table(UserData);
        const filteredRecipes = filterRecipes(userInput);
        displayRecipes(filteredRecipes);
        updateRecipeCount(filteredRecipes);
      }
    }
  });

  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", () => {
    const inputElementValue = inputElement.value.trim();
    const cleanInput = xssHtml(inputElementValue);
    if (inputElementValue !== cleanInput) {
      return;
    }

    if (inputElementValue !== "") {
      UserData.push(inputElementValue);
      console.table(UserData);
      const filteredRecipes = filterRecipes(inputElementValue);
      displayRecipes(filteredRecipes);
      updateRecipeCount(filteredRecipes);
    }
  });
}

export function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}

export { UserData, search };
