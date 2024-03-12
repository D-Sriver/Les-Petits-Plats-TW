// récupération de l'id qui contiens l'input de recherche
export function getSearch() {
  return document.getElementById("search");
}

// Fonction de recherche qui renvoie une promesse
export function search(inputElement) {
  return new Promise((resolve) => {
    // Ajoute un écouteur d'événements "input" à l'élément de recherche
    inputElement.addEventListener("input", () => {
      //résout la promesse avec la valeur de l'input
      resolve(inputElement.value);
    });
  });
}
