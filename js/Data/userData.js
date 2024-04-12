const UserData = [];
import { displayRecipes } from "../Utils/displayRecipe.js";
import { filterRecipes } from "../Utils/filterRecipes.js";
import { updateRecipeCount } from "../Utils/search.js";

function extractContent(event) {
  // récupérer le contenu du paragraphe cliqué
  const clickedParagraphContent = event.target.textContent;
  // push le paragraphe cliqué dans le tableau UserData
  UserData.push(clickedParagraphContent);
  console.table(UserData);
  const filteredRecipes = filterRecipes(clickedParagraphContent);
  displayRecipes(filteredRecipes);
  updateRecipeCount(filteredRecipes);
}

export { UserData, extractContent };
