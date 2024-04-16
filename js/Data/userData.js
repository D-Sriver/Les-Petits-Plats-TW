const UserData = [];
import { displayRecipes } from "../Utils/displayRecipe.js";
import { filterRecipes } from "../Utils/filterRecipes.js";
import { updateRecipeCount } from "../Utils/search.js";
import { createTagsFromArray } from "../Utils/TagBuild.js";

const tagContainer = document.querySelector(".tag-input");
createTagsFromArray(UserData, tagContainer);
UserData.forEach((element) => {
  createTagsFromArray([element], tagContainer);
});

function extractContent(event) {
  // récupérer le contenu du paragraphe cliqué
  const clickedParagraphContent = event.target.textContent;
  // push le paragraphe cliqué dans le tableau UserData
  UserData.push(clickedParagraphContent);
  console.table(UserData);
  tagContainer.innerHTML = "";
  createTagsFromArray(UserData, tagContainer);
  const filteredRecipes = filterRecipes(clickedParagraphContent);
  displayRecipes(filteredRecipes);
  updateRecipeCount(filteredRecipes);
}

export { extractContent, UserData };
