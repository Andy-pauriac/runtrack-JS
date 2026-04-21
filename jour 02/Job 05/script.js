window.addEventListener("scroll", function() {

  let scrollActuel = window.scrollY;
  let hauteurTotale = document.body.scrollHeight - window.innerHeight;
  let pourcentage = (scrollActuel / hauteurTotale) * 100;

  document.getElementById("footer").style.width = pourcentage + "%";

});