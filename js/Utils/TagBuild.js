import { tagStructure } from "../Templates/tag.js";

// Fonction pour créer des tags à partir du tableau
function createTagsFromArray(dataArray, tagContainer) {
  dataArray.forEach((element) => {
    const tagTextElement = document.createTextNode(element);
    tagStructure(tagTextElement, tagContainer);
  });
}

export { createTagsFromArray };
