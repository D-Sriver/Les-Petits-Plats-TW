function closeTag(tagElement) {
  // Ferme le tag lorsqu'on clique sur la croix
  const closeButton = tagElement.querySelector(".fa-times");
  closeButton.addEventListener("click", () => {
    tagElement.remove();
  });
}

function addTagEnter(event, inputElement, logiqueAddTag) {
  if (event.key === "Enter" && inputElement.value.trim() !== "") {
    logiqueAddTag();
    inputElement.value = "";
  }
}

function addTagClick(inputElement, logiqueAddTag) {
  if (inputElement.value.trim() !== "") {
    logiqueAddTag();
    inputElement.value = "";
  }
}

export { addTagEnter, addTagClick, closeTag };
