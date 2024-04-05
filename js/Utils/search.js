// Fonction de recherche qui renvoie une promesse
function search(inputElement) {
  return new Promise((resolve) => {
    // Ajoute un écouteur d'événements "input" à l'élément de recherche
    inputElement.addEventListener("input", () => {
      //résout la promesse avec la valeur de l'input
      resolve(inputElement.value);
      console.log(inputElement.value);
    });
  });
}

export { search };
