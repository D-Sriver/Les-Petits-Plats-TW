// Importez les dépendances nécessaires
import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";
import { displayRecipes } from "./displayRecipe.js";
import { handleDropdownSearch } from "./dropdownSearch.js";
import { filterRecipes } from "./filterRecipes.js";

function resetDisplay() {
  UserData.length = 0;
  displayRecipes(recipes);
  updateRecipeCount(recipes);
}
// Déclarez une fonction pour afficher la valeur de l'entrée de l'utilisateur
export function logInputValue() {
  const inputElement = document.getElementById("search");

  inputElement.addEventListener("input", () => {
    console.log(inputElement.value);
    if (inputElement.value === "") {
      resetDisplay();
    }
  });
}

// fonction de remplacement pour les caractères spéciaux
function xssHtml(stringXss) {
  return stringXss.replace(
    // expression régulière pour les caractères spéciaux
    /[&<>"'`=/\\(){}\[\];:,.?@#$%^*+~_|]/g,
    function (match) {
      // retourne le code ASCII de la correspondance
      return `&#${match.charCodeAt(0)};`;
    }
  );
}

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
      handleDropdownSearch();
    }
  });
}

export function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}

export { UserData, search };
