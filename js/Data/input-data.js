import { getSearch } from "../Utils/search.js";

export function logInputValue() {
  const inputElement = getSearch();
  //récupère la valeur de l'input
  inputElement.addEventListener("input", () => {
    console.log(inputElement.value);
  });
}
