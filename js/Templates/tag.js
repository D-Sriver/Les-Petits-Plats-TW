import { getSearch, search } from "/js/Utils/search.js";

export function addTag() {
  const inputElement = getSearch();
  const tagContainer = document.querySelector(".tag-container"); // Sélectionnez le conteneur des tags

  // ajout du tag
  function logiqueAddTag() {
    const tagContainer = document.querySelector(".tag-input");
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
    tagTextElement.textContent = inputElement.value;

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

  // si la touche entrer -> logiqueAddTag
  search(inputElement).then(() => {
    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter" && inputElement.value !== "") {
        logiqueAddTag();
      }
    });

    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
      if (inputElement.value !== "") {
        logiqueAddTag();
      }
    });
  });
}
