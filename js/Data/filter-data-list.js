import { recipes } from "/js/Data/recipes.js";

const getIngredients = () => {
  // crée un tableau vide pour stocker les ingrédients
  const ingredients = recipes.reduce((uniqueIngredients, recette) => {
    // on parcourt les ingrédients de chaque recette
    recette.ingredients.forEach((ingredient) => {
      // si l'ingrédient n'est pas déjà dans le tableau,
      if (!uniqueIngredients.includes(ingredient.ingredient)) {
        // on l'ajoute
        uniqueIngredients.push(ingredient.ingredient);
      }
    });
    // on retourne le tableau mis à jour
    return uniqueIngredients;
  }, []);
  // on retourne le tableau
  return ingredients;
};

const getAppareil = () => {
  const appareil = recipes.reduce((uniqueAppareil, recette) => {
    if (!uniqueAppareil.includes(recette.appliance)) {
      uniqueAppareil.push(recette.appliance);
    }
    return uniqueAppareil;
  }, []);
  return appareil;
};

const getUstensils = () => {
  const ustensils = recipes.reduce((uniqueUstensils, recette) => {
    recette.ustensils.forEach((ustensil) => {
      if (!uniqueUstensils.includes(ustensil)) {
        uniqueUstensils.push(ustensil);
      }
    });
    return uniqueUstensils;
  }, []);
  return ustensils;
};
// console.dir(getIngredients());
// console.dir(getAppareil());
// console.dir(getUstensils());

export { getAppareil, getIngredients, getUstensils };
