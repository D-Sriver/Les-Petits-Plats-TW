function updateRecipeCount(filteredRecipes) {
  const recipeCount = document.getElementById("recipeCount");
  recipeCount.textContent = filteredRecipes.length;
}
export { updateRecipeCount };
