import { recipes } from "/js/Data/recipes.js";

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const getIngredients = () => {
  const ingredients = recipes.reduce((uniqueIngredients, recette) => {
    recette.ingredients.forEach((ingredient) => {
      const lowerCaseIngredient = ingredient.ingredient.toLowerCase();
      if (!uniqueIngredients.includes(lowerCaseIngredient)) {
        uniqueIngredients.push(lowerCaseIngredient);
      }
    });
    return uniqueIngredients;
  }, []);
  return ingredients.sort().map(capitalizeFirstLetter);
};

const getAppareil = () => {
  const appareil = recipes.reduce((uniqueAppareil, recette) => {
    const lowerCaseAppareil = recette.appliance.toLowerCase();
    if (!uniqueAppareil.includes(lowerCaseAppareil)) {
      uniqueAppareil.push(lowerCaseAppareil);
    }
    return uniqueAppareil;
  }, []);
  return appareil.sort().map(capitalizeFirstLetter);
};

const getUstensils = () => {
  const ustensils = recipes.reduce((uniqueUstensils, recette) => {
    recette.ustensils.forEach((ustensil) => {
      const lowerCaseUstensil = ustensil.toLowerCase();
      if (!uniqueUstensils.includes(lowerCaseUstensil)) {
        uniqueUstensils.push(lowerCaseUstensil);
      }
    });
    return uniqueUstensils;
  }, []);
  return ustensils.sort().map(capitalizeFirstLetter);
};

export { getAppareil, getIngredients, getUstensils };
