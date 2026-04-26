function filtrer() {

    fetch("pokemon.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(pokemons) {

        var id   = document.getElementById("filtreId").value;
        var nom  = document.getElementById("filtreNom").value.toLowerCase();
        var type = document.getElementById("filtreType").value;

        var liste = [];

        for (var i = 0; i < pokemons.length; i++) {
            var p = pokemons[i];

            if (id != "" && p.id != id) {
                continue;
            }
            if (nom != "" && p.nom.toLowerCase().indexOf(nom) == -1) {
                continue;
            }
            if (type != "" && p.type != type) {
                continue;
            }

            liste.push(p);
        }

        var html = "<table>";
        html += "<tr><th>ID</th><th>Nom</th><th>Type</th></tr>";

        for (var j = 0; j < liste.length; j++) {
            html += "<tr>";
            html += "<td>" + liste[j].id   + "</td>";
            html += "<td>" + liste[j].nom  + "</td>";
            html += "<td>" + liste[j].type + "</td>";
            html += "</tr>";
        }

        html += "</table>";

        if (liste.length == 0) {
            html = "<p>Aucun résultat</p>";
        }

        document.getElementById("resultats").innerHTML = html;
    });

}
