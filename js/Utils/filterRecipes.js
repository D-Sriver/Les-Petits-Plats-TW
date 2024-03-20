export function filterRecipes(recipes, searchTerm) {
  const filters = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const recipeName = recipe.name.toLowerCase();
    const recipeDescription = recipe.description.toLowerCase();
    let trouve = false;

    if (
      recipeName.includes(searchTerm) ||
      recipeDescription.includes(searchTerm)
    ) {
      trouve = true;
    } else {
      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ingredient = recipe.ingredients[j];
        const ingredientName = ingredient.ingredient.toLowerCase();

        if (ingredientName.includes(searchTerm)) {
          trouve = true;
          break;
        }
      }
    }

    if (trouve) {
      filters.push(recipe);
    }
  }

  return filters;
}
