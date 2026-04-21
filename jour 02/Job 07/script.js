let bouton = document.getElementById("toggle-theme");

bouton.addEventListener("click", changeTheme);

function changeTheme() {
  document.body.classList.toggle("dark");
}