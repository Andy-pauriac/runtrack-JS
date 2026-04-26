// quand on clique sur le bouton on charge le fichier texte
document.getElementById("button").addEventListener("click", function() {

    fetch("expression.txt")
    .then(function(response) {
        return response.text();
    })
    .then(function(texte) {
        var p = document.createElement("p");
        p.textContent = texte;
        document.getElementById("result").appendChild(p);
    });

});
