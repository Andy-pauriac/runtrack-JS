var btnAfficher = document.getElementById("btn-afficher");
var btnCacher   = document.getElementById("btn-cacher");
var citation    = document.getElementById("citation");

btnAfficher.addEventListener("click", function() {
  citation.style.display = "block";
});

btnCacher.addEventListener("click", function() {
  citation.style.display = "none";
});