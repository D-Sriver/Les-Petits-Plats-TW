// Déclarez un tableau pour stocker les entrées de l'utilisateur
const UserData = [];
import { xssHtml } from "./xss.js";

function search(inputElement) {
  return new Promise((resolve) => {
    inputElement.addEventListener("input", () => {
      const userInput = inputElement.value.trim();
      const CleanInput = xssHtml(userInput);
      if (userInput !== CleanInput) {
        // L'entrée contient des caractères spéciaux échappés, ne pas la prendre en compte
        return;
      }

      if (userInput !== "") {
        resolve(userInput);
        console.log(userInput);
      }
    });

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
      const userInput = inputElement.value.trim();
      const CleanInput = xssHtml(userInput);
      if (userInput !== CleanInput) {
        // L'entrée contient des caractères spéciaux échappés, ne pas la prendre en compte
        return;
      }

      if (userInput !== "") {
        resolve(userInput);
        UserData.push(userInput);
        console.table(UserData);
      }
    });

    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        const userInput = inputElement.value.trim();
        const CleanInput = xssHtml(userInput);
        if (userInput !== CleanInput) {
          // L'entrée contient des caractères spéciaux échappés, ne pas la prendre en compte
          return;
        }

        if (userInput !== "") {
          resolve(userInput);
          UserData.push(userInput);
          console.table(UserData);
        }
      }
    });
  });
}

export function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}

export { UserData, search };
