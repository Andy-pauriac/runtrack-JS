// ── Configuration ─────────────────────────────────────────────────────────────
// L'ordre correct des pièces : 1 à 8, puis 0 = case vide
var ordreCorrect = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// L'état actuel du plateau (sera mélangé)
var plateau = [];

// ── Fonction : mélanger le plateau ───────────────────────────────────────────
function melangerPlateau() {
  plateau = ordreCorrect.slice(); // copie de l'ordre correct

  // On effectue 200 mouvements aléatoires valides pour garantir une config résolvable
  for (var i = 0; i < 200; i++) {
    var vide = plateau.indexOf(0);
    var voisins = getVoisins(vide);
    var choix = voisins[Math.floor(Math.random() * voisins.length)];
    plateau[vide] = plateau[choix];
    plateau[choix] = 0;
  }
}

// ── Fonction : retourner les indices voisins d'une case ───────────────────────
// La grille est 3x3, les cases sont numérotées 0 à 8
function getVoisins(index) {
  var voisins = [];
  var ligne   = Math.floor(index / 3);
  var colonne = index % 3;

  if (ligne > 0) voisins.push(index - 3); // case au-dessus
  if (ligne < 2) voisins.push(index + 3); // case en-dessous
  if (colonne > 0) voisins.push(index - 1); // case à gauche
  if (colonne < 2) voisins.push(index + 1); // case à droite

  return voisins;
}

// ── Fonction : afficher la grille ─────────────────────────────────────────────
function afficherGrille() {
  $("#grille").empty(); // on efface tout

  for (var i = 0; i < 9; i++) {
    var piece = plateau[i];
    var div = $("<div>").css({
      display: "inline-block",
      width: "100px",
      height: "100px",
      border: "1px solid black",
      margin: "2px",
      textAlign: "center",
      lineHeight: "100px",
      cursor: piece !== 0 ? "pointer" : "default",
      background: piece !== 0 ? "#ddd" : "white",
      verticalAlign: "top"
    });

    if (piece !== 0) {
      // Affiche une image ou juste le numéro si pas d'images disponibles
      var img = $("<img>")
        .attr("src", "image" + piece + ".png")
        .css({ width: "100px", height: "100px" });
      div.append(img);
      div.attr("data-index", i); // on retient la position dans la grille

      // Clic sur une pièce
      div.click(function () {
        var indexPiece = parseInt($(this).attr("data-index"));
        var indexVide  = plateau.indexOf(0);
        var voisins    = getVoisins(indexVide);

        // On vérifie que la pièce cliquée est bien voisine de la case vide
        if (voisins.indexOf(indexPiece) !== -1) {
          // On échange la pièce avec la case vide
          plateau[indexVide]  = plateau[indexPiece];
          plateau[indexPiece] = 0;

          afficherGrille(); // on redessine
          verifierVictoire();
        }
      });
    }

    // La grille fait 3 colonnes : on ajoute un retour à la ligne tous les 3
    if (i % 3 === 0 && i !== 0) {
      $("#grille").append($("<br>"));
    }

    $("#grille").append(div);
  }
}

// ── Fonction : vérifier si le joueur a gagné ──────────────────────────────────
function verifierVictoire() {
  var gagne = true;
  for (var i = 0; i < 9; i++) {
    if (plateau[i] !== ordreCorrect[i]) {
      gagne = false;
      break;
    }
  }

  if (gagne) {
    $("#message").text("Vous avez gagné !").css("color", "green");
    $("#btn-recommencer").show();
    // On désactive les clics en retirant les événements
    $("#grille div").off("click");
  }
}

// ── Bouton recommencer ────────────────────────────────────────────────────────
$("#btn-recommencer").click(function () {
  $("#message").text("");
  $(this).hide();
  melangerPlateau();
  afficherGrille();
});

// ── Lancement au chargement de la page ───────────────────────────────────────
melangerPlateau();
afficherGrille();