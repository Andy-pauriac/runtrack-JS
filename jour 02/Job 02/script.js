function showhide() {
  let article = document.getElementById("mon-article");

  if (article) {
    // L'article existe → on le supprime
    article.remove();
  } else {
    // L'article n'existe pas → on le crée
    let nouvelArticle = document.createElement("article");
    nouvelArticle.id = "mon-article";
    nouvelArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(nouvelArticle);
  }
}