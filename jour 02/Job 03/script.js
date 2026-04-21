let compteur = 0;

function addOne() {
  compteur++;
  document.getElementById("compteur").textContent = compteur;
}

let bouton = document.getElementById("button");
bouton.addEventListener("click", addOne);