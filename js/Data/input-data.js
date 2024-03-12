import { getSearch } from "../utils/search.js";

export function logInputValue() {
  const inputElement = getSearch();

  inputElement.addEventListener("input", () => {
    console.log(inputElement.value);
  });
}
