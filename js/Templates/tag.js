import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "../Data/filter-data-list.js";
import { addTagClick, addTagEnter, closeTag } from "../Utils/actionTag.js";
import { search } from "/js/Utils/search.js";

let tags = [];
const allOptions = [...getIngredients(), ...getAppareil(), ...getUstensils()];

function logiqueAddTag(tagTextElement, tagContainer, inputElement) {
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
  closeButton.classList.add("fas", "fa-times", "cursor-pointer");
  closeButton.classList.add("p-2");

  newTagElement.appendChild(tagTextElement);
  newTagElement.appendChild(closeButton);
  tagContainer.appendChild(newTagElement);

  // Appeler la fonction pour gérer les actions du tag
  closeTag(newTagElement, inputElement);

  tags.push(tagTextElement.textContent);
}

export function addTag() {
  const inputElement = document.getElementById("search");

  const tagContainer = document.querySelector(".tag-input");

  search(inputElement).then(() => {
    inputElement.addEventListener("keyup", (event) => {
      // Appeler la fonction pour gérer la touche "Entrée"
      addTagEnter(event, inputElement, () => {
        if (inputElement.value.trim() !== "") {
          logiqueAddTag(
            document.createElement("p"),
            tagContainer,
            inputElement
          );
          inputElement.value = "";
        }
      });
    });

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
      // Appeler la fonction pour gérer le clic sur le bouton de recherche
      addTagClick(inputElement, () => {
        if (inputElement.value.trim() !== "") {
          logiqueAddTag(
            document.createElement("p"),
            tagContainer,
            inputElement
          );
          inputElement.value = "";
        }
      });
    });
  });
}

export { logiqueAddTag, tags };
