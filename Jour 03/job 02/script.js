// ── Les 6 images dans l'ordre correct (ordre = leur numéro) ──────────────────
var images = [
  { src: "arc1.png", ordre: 1 },
  { src: "arc2.png", ordre: 2 },
  { src: "arc3.png", ordre: 3 },
  { src: "arc4.png", ordre: 4 },
  { src: "arc5.png", ordre: 5 },
  { src: "arc6.png", ordre: 6 }
];

// ── Fonction pour mélanger un tableau (algorithme Fisher-Yates) ──────────────
function melanger(tableau) {
  for (var i = tableau.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = tableau[i];
    tableau[i] = tableau[j];
    tableau[j] = temp;
  }
  return tableau;
}

// ── Clic sur "Mélanger" ──────────────────────────────────────────────────────
$("#btn-melanger").click(function () {

  // On vide les deux zones
  $("#zone-melange").empty();
  $(".case").empty();
  $("#message").text("");

  // On mélange les images
  var imagesMelangees = melanger(images.slice()); // .slice() = copie du tableau

  // On crée une balise <img> pour chaque image et on l'ajoute dans zone-melange
  $.each(imagesMelangees, function (index, image) {
    var img = $("<img>")
      .attr("src", image.src)
      .attr("data-ordre", image.ordre)   // on mémorise le bon numéro d'ordre
      .attr("draggable", "true")         // on autorise le glisser-déposer
      .css({ width: "80px", cursor: "grab", margin: "5px" });

    // Événements drag & drop natifs sur chaque image
    img.on("dragstart", function (e) {
      // On sauvegarde l'ordre de l'image qu'on déplace
      e.originalEvent.dataTransfer.setData("ordre", $(this).attr("data-ordre"));
      e.originalEvent.dataTransfer.setData("src", $(this).attr("src"));
    });

    $("#zone-melange").append(img);
  });

  // On prépare les cases de dépôt
  $(".case").css({ display: "inline-block", width: "90px", height: "90px",
                   border: "1px dashed black", margin: "4px",
                   verticalAlign: "top" });

  $(".case").on("dragover", function (e) {
    e.preventDefault(); // nécessaire pour autoriser le drop
  });

  $(".case").on("drop", function (e) {
    e.preventDefault();
    var ordre = e.originalEvent.dataTransfer.getData("ordre");
    var src   = e.originalEvent.dataTransfer.getData("src");

    // On crée une petite image dans la case
    $(this).empty();
    var imgDrop = $("<img>")
      .attr("src", src)
      .attr("data-ordre", ordre)
      .css({ width: "80px" });
    $(this).append(imgDrop);
  });
});

// ── Clic sur "Vérifier" ──────────────────────────────────────────────────────
$("#btn-verifier").click(function () {

  var correct = true;

  // On vérifie chaque case : data-position doit correspondre à data-ordre de l'image
  $(".case").each(function () {
    var positionAttendue = $(this).attr("data-position");
    var img = $(this).find("img");

    if (img.length === 0 || img.attr("data-ordre") !== positionAttendue) {
      correct = false;
    }
  });

  if (correct) {
    $("#message").text("Vous avez gagné !").css("color", "green");
  } else {
    $("#message").text("Vous avez perdu !").css("color", "red");
  }
});