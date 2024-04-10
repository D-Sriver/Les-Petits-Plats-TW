// Fonction de recherche qui renvoie une promess
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
export function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}

export { search };
