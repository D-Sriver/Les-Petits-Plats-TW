//
import { recipes } from "../Data/recipes.js";
import { UserData } from "../Data/userData.js";
import { displayRecipes } from "../Utils/displayRecipe.js";
import { filterRecipes } from "../Utils/filterRecipes.js";
import { updateDropdownOptions } from "../Utils/insertOption.js";
import { updateRecipeCount } from "../Utils/search.js";

function tagStructure(tagTextElement, tagContainer) {
  const newTagElement = document.createElement("tag");
  newTagElement.classList.add(
    "tag",
    "flex",
    "font-light",
    "items-center",
    "justify-between",
    "text-xl",
    "mt-6",
    "py-3",
    "px-1",
    "pl-4",
    "bg-yellow-400",
    "rounded-xl",
    "hover:bg-yellow-500"
  );
  const closeButton = document.createElement("i");
  closeButton.classList.add("fas", "fa-times", "cursor-pointer", "p-2");
  closeButton.addEventListener("click", () => {
    // Supprimer le tag de UserData
    const clickedTag = tagTextElement.textContent;
    const tagIndex = UserData.indexOf(clickedTag);
    if (tagIndex !== -1) {
      UserData.splice(tagIndex, 1);
    }
    // Rafraîchir les tags affichés
    tagContainer.innerHTML = "";
    createTagsFromArray(UserData, tagContainer);
    // si UserData n'est pas vide, filtrer les recettes
    if (UserData.length > 0) {
      displayRecipes(filterRecipes(recipes, UserData));
      updateRecipeCount(filterRecipes(recipes, UserData));
      updateDropdownOptions(filterRecipes(recipes, UserData));
    } else {
      //afficher toutes les recettes
      displayRecipes(recipes);
      updateRecipeCount(recipes);
      updateDropdownOptions(recipes);
    }
  });

  newTagElement.appendChild(tagTextElement);
  newTagElement.appendChild(closeButton);
  tagContainer.appendChild(newTagElement);
}

function createTagsFromArray(dataArray, tagContainer) {
  dataArray.forEach((element) => {
    const tagTextElement = document.createTextNode(element);
    tagStructure(tagTextElement, tagContainer);
  });
}

export { createTagsFromArray, tagStructure };
