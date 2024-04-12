// Déclarez un tableau pour stocker les entrées de l'utilisateur
import { UserData } from "../Data/userData.js";
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
        UserData.push(userInput);
        console.table(UserData);
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
    }
  });
}

export function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}

export { UserData, search };
