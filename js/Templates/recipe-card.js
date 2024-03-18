import { recipes } from "/js/Data/recipes.js";
// récupère la div qui contiendra les recettes
const recipeContainer = document.querySelector(".recipes");
const generateRecipeHTML = (recipe) => {
  // crée les carte pour chaque recette en utilisant les données de recipes.js
  return `
  <div class="bg-white rounded-3xl ">
      <div class="relative rounded-t-3xl pb-4">
        <span class="absolute top-6 right-4 bg-yellow-400 text-xs px-4 py-2 rounded-3xl">${
          recipe.time
        } min</span>
        <img src="/img/Recipe/${
          recipe.image
        }" alt="repas" class="w-full h-56 object-cover rounded-t-3xl">
      </div>
      <div class="px-8 pt-4">
        <div class="pb-5">
          <h2 class="font-anton text-lg">${recipe.name}</h2>
        </div>
        <h3 class="font-semibold tracking-wider text-gray-400 uppercase mb-4">Recette</h3>
        <p class="font-light pb-10">${recipe.description}</p>
        <div class="mb-4">
          <h3 class="text-xs font-semibold text-gray-500 uppercase mb-4">Ingrédients</h3>
          <ul class="grid grid-cols-2 gap-3 pb-8">
            ${recipe.ingredients
              .map(
                (ingredient) => `
                <li class="grid" >
                  <span>${ingredient.ingredient}</span>
                  <span class="text-gray-400">${ingredient.quantity}${
                  ingredient.unit || ""
                }</span>
                </li>
              `
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
};
// affiche les recettes
const displayRecipes = () => {
  recipes.forEach((recipe) => {
    const recipeHTML = generateRecipeHTML(recipe);
    recipeContainer.innerHTML += recipeHTML;
  });
};
export { displayRecipes };
