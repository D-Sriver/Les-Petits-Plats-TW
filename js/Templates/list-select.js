import { extractContent } from "../Data/userData.js";
let uniqueIdCounter = 0;

// Fonction pour générer un ID unique
function generateUniqueSearchID() {
  uniqueIdCounter++;
  return "search-input-" + uniqueIdCounter;
}

// Fonction pour insérer les options dans la liste déroulante
function insertOptions(optionsList, items) {
  items.forEach((item) => {
    const option = document.createElement("li");
    const paragraph = document.createElement("p");
    option.classList.add("rounded-xl");
    paragraph.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "h-13",
      "cursor-pointer",
      "text-ellipsis",
      "p-3",
      "bg-white",
      "hover:bg-yellow-400"
    );
    paragraph.textContent = item;

    option.appendChild(paragraph);
    optionsList.appendChild(option);
  });
}

// Fonction pour générer et insérer les options dans la catégorie
function insertCategory(categoryElement, items) {
  if (!categoryElement) {
    return;
  }
  const optionsList = categoryElement.querySelector(".dropdown-list");
  optionsList.innerHTML = "";

  // Ajout du champ de recherche
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Rechercher...");
  searchInput.classList.add(
    "search-input",
    "m-0",
    "py-1",
    "w-full",
    "focus:outline-none"
  );

  // Attribution d'un ID unique au champ de recherche
  searchInput.id = generateUniqueSearchID();

  // Ajout du bouton de recherche
  const searchButton = document.createElement("button");
  searchButton.classList.add("search-button", "bg-white", "ml-2");
  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fas", "fa-search");
  searchButton.appendChild(searchIcon);

  // Ajout de la liste des options dans la catégorie associée
  const searchContainer = document.createElement("li");
  searchContainer.classList.add(
    "search-container",
    "flex",
    "top-0",
    "sticky",
    "border",
    "px-3",
    "py-1",
    "z-40",
    "rounded-xl",
    "bg-white"
  );
  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  optionsList.appendChild(searchContainer);

  // Attachez l'événement de clic une fois que les options ont été insérées
  setTimeout(() => {
    const paragraphs = optionsList.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.addEventListener("click", extractContent);
    });
  }, 0);

  insertOptions(optionsList, items);
}

export { insertCategory };
