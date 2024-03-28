import {
  getAppareil,
  getIngredients,
  getUstensils,
} from "/js/Data/filter-data-list.js";
import { getSearch, search } from "/js/Utils/search.js";

// Récupérer toutes les options disponibles
const allOptions = [...getIngredients(), ...getAppareil(), ...getUstensils()];

// Fonction pour trouver le nom le plus proche parmi toutes les options
function findClosestName(searchTerm) {
  const closestName = allOptions.find((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return closestName || null;
}

export function addTag() {
  const inputElement = getSearch();

  // Fonction pour ajouter un nouveau tag
  function logiqueAddTag() {
    const tagContainer = document.querySelector(".tag-input");
    const closestName = findClosestName(inputElement.value.trim());

    if (closestName) {
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

      const tagTextElement = document.createElement("p");
      tagTextElement.textContent = closestName;

      const closeButton = document.createElement("i");
      closeButton.classList.add("fas", "fa-times", "cursor-pointer");
      closeButton.classList.add("p-2");
      closeButton.addEventListener("click", () => {
        newTagElement.remove();
      });

      newTagElement.appendChild(tagTextElement);
      newTagElement.appendChild(closeButton);
      tagContainer.appendChild(newTagElement);
    }
  }

  // Ajoute un tag lorsque la touche "Entrée" est enfoncée
  search(inputElement).then(() => {
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && inputElement.value.trim() !== "") {
        logiqueAddTag();
      }
    });

    // Ajoute un tag lorsque le bouton de recherche est cliqué
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
      if (inputElement.value.trim() !== "") {
        logiqueAddTag();
      }
    });
  });
}
