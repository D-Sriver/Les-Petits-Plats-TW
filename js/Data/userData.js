const UserData = [];
import { createTagsFromArray } from "../Templates/tag.js";
import { displayRecipes } from "../Utils/displayRecipe.js";
import { handleDropdownSearch } from "../Utils/dropdownSearch.js";
import { filterRecipes } from "../Utils/filterRecipes.js";
import { updateDropdownOptions } from "../Utils/insertOption.js";
import { updateRecipeCount } from "../Utils/search.js";

const tagContainer = document.querySelector(".tag-input");
createTagsFromArray(UserData, tagContainer);
UserData.forEach((element) => {
  createTagsFromArray([element], tagContainer);
});

function extractContent(event) {
  // récupérer le contenu du paragraphe cliqué
  const clickedParagraphContent = event.target.textContent;
  const filteredRecipes = filterRecipes(clickedParagraphContent);
  // push le paragraphe cliqué dans le tableau UserData
  UserData.push(clickedParagraphContent);
  tagContainer.innerHTML = "";
  createTagsFromArray(UserData, tagContainer);
  displayRecipes(filteredRecipes);
  updateRecipeCount(filteredRecipes);
  updateDropdownOptions(filteredRecipes);
  handleDropdownSearch();
}

export { UserData, extractContent };
