import { recipes } from "../Data/recipes.js";
// fonction pour capitaliser la première lettre d'un mot
const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
// compare les ingrédients
const getIngredients = () => {
  const uniqueIngredients = new Set();
  recipes.forEach((recette) => {
    // forEach pour parcourir les ingrédients de chaque recette
    recette.ingredients.forEach((ingredient) => {
      // ajout des ingrédients dans le Set uniqueIngredients
      uniqueIngredients.add(ingredient.ingredient.toLowerCase());
    });
  });
  // tri des ingrédients
  const sortedIngredients = Array.from(uniqueIngredients)
    // le filtre enlève les éléments vides
    .filter((ingredient) => ingredient !== "")
    // tri des ingrédients par ordre alphabétique
    .sort()
    // capitalisation de la première lettre
    .map(capitalizeFirstLetter);
  return sortedIngredients;
};

const getAppareil = () => {
  const uniqueAppareils = new Set();
  recipes.forEach((recette) => {
    uniqueAppareils.add(recette.appliance.toLowerCase());
  });
  const sortedAppareils = Array.from(uniqueAppareils)
    .filter((appareil) => appareil !== "")
    .sort()
    .map(capitalizeFirstLetter);
  return sortedAppareils;
};

const getUstensils = () => {
  const uniqueUstensils = new Set();
  recipes.forEach((recette) => {
    recette.ustensils.forEach((ustensil) => {
      uniqueUstensils.add(ustensil.toLowerCase());
    });
  });
  const sortedUstensils = Array.from(uniqueUstensils)
    .filter((ustensil) => ustensil !== "")
    .sort()
    .map(capitalizeFirstLetter);
  return sortedUstensils;
};

export { getAppareil, getIngredients, getUstensils };
