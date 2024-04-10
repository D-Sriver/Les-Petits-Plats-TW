// fonction de remplacement pour les caractères spéciaux
function xssHtml(stringXss) {
  return stringXss.replace(
    // expression régulière pour les caractères spéciaux
    /[&<>"'`=/\\(){}\[\];:,.?@#$%^*+~_|]/g,
    function (match) {
      // retourne le code ASCII de la correspondance
      return `&#${match.charCodeAt(0)};`;
    }
  );
}
export { xssHtml };
