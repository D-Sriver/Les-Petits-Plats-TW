export function filterRecipes(recipes, searchTerm) {
  return recipes.filter((recipe) => {
    const recipeName = recipe.name.toLowerCase();
    const recipeDescription = recipe.description.toLowerCase();

    if (
      recipeName.includes(searchTerm) ||
      recipeDescription.includes(searchTerm)
    ) {
      return true;
    } else {
      return recipe.ingredients.some((ingredient) => {
        const ingredientName = ingredient.ingredient.toLowerCase();
        return ingredientName.includes(searchTerm);
      });
    }
  });
}
