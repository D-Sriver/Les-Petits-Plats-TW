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
    console.log(UserData);
    displayRecipes(UserData);
    updateRecipeCount(UserData);
    //réactualise l'affichage des recettes
  });

  newTagElement.appendChild(tagTextElement);
  newTagElement.appendChild(closeButton);
  tagContainer.appendChild(newTagElement);
}

export { tagStructure };
