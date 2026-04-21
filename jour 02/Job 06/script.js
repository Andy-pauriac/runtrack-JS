const konamiCode = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];

let progression = 0;

document.addEventListener("keydown", function(event) {

  if (event.key === konamiCode[progression]) {
    progression++;

    if (progression === konamiCode.length) {
      activerPage();
      progression = 0;
    }

  } else {
    progression = 0;
  }

});

function activerPage() {
  document.body.classList.add("active");

  let titre = document.createElement("h1");
  titre.textContent = "La Plateforme_";

  document.body.appendChild(titre);
} 