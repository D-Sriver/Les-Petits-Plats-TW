const UserData = [];

function extractContent(event) {
  // récupérer le contenu du paragraphe cliqué
  const clickedParagraphContent = event.target.textContent;
  // push le paragraphe cliqué dans le tableau UserData
  UserData.push(clickedParagraphContent);
  console.table(UserData);
}

export { UserData, extractContent };
