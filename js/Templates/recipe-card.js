import { recipes } from "../data/recipes.js";
// récupère la div qui contiendra les recettes
const recipeContainer = document.querySelector(".recipes");
const generateRecipeHTML = (recipe) => {
  // crée les carte pour chaque recette en utilisant les données de recipes.js
  return `
    <article class="fle flex-col rounded-lg mx-auto max-w-md">
      <img class="object-cover rounded-t-lg" src="img/Recipe/${
        recipe.image
      }" alt="repas" />
      <div class=" p-6 recipes-description">
        <div class="flex justify-between items-center">
          <h3 class="font-bold text-lg">${recipe.name}</h3>
          <div class= "bg-yellow-300 text-black rounded-full px-2 py-1 text-xs font-bold">${
            recipe.time
          } min</div>
        </div>
        <span class="uppercase">Recette</span>
        <p>${recipe.description}</p>
        <span class="uppercase">Ingrédients</span>
        <div class="ingredients-container">
          ${recipe.ingredients
            .map(
              (ingredient) => `
            <div>
              <span>${ingredient.ingredient}</span>
              ${
                ingredient.quantity
                  ? `<span class="quantity">${ingredient.quantity}${
                      ingredient.unit || ""
                    }</span>`
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </article>
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
