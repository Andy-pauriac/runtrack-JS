// on passe par allorigins pour eviter le probleme de CORS avec zenquotes
document.getElementById("get-quote").addEventListener("click", function() {

    var url = "https://zenquotes.io/api/random";
    var proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

    fetch(proxy)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // allorigins met la reponse dans data.contents
        var citation = JSON.parse(data.contents);

        var texte  = citation[0].q;
        var auteur = citation[0].a;

        document.getElementById("citation").innerHTML = "<p>" + texte + "</p><p><b>" + auteur + "</b></p>";
        document.getElementById("citation").style.display = "block";
    });

});
