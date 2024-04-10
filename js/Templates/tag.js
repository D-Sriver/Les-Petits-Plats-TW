//

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
    newTagElement.remove();
  });

  newTagElement.appendChild(tagTextElement);
  newTagElement.appendChild(closeButton);
  tagContainer.appendChild(newTagElement);
}

export { tagStructure };
