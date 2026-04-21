let textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  let touche = event.key;

  if (touche >= "a" && touche <= "z") {

    if (document.activeElement === textarea) {
      textarea.value += touche;
    } else {
      textarea.value += touche;
    }

  }
});