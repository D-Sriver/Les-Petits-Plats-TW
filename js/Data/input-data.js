import { getSearch } from "/js/Utils/search.js";

export function logInputValue() {
  const inputElement = getSearch();

  inputElement.addEventListener("input", () => {
    console.log(inputElement.value);
  });
}
