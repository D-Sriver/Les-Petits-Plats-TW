//
import { UserData } from "../Data/userData.js";
import { displayRecipes } from "../Utils/displayRecipe.js";
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
    const tagId = parseInt(newTagElement.dataset.tagId);
    // Supprimer l'élément correspondant du tableau UserData en fonction de son ID (index)
    UserData.splice(tagId, 1);
    // Supprimer le tag du DOM
    newTagElement.remove();
    displayRecipes(UserData);
    updateRecipeCount(UserData);
    //réactualise l'affichage des recettes
  });

  newTagElement.appendChild(tagTextElement);
  newTagElement.appendChild(closeButton);
  const tagId = tagContainer.children.length - 1;
  newTagElement.setAttribute("data-tag-id", tagId);
  tagContainer.appendChild(newTagElement);
}

export { tagStructure };
