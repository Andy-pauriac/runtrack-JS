document.getElementById("update").addEventListener("click", function() {

    fetch("utilisateur.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(utilisateurs) {

        var html = "";

        for (var i = 0; i < utilisateurs.length; i++) {
            var u = utilisateurs[i];
            html += "<tr>";
            html += "<td>" + u.id     + "</td>";
            html += "<td>" + u.nom    + "</td>";
            html += "<td>" + u.prenom + "</td>";
            html += "<td>" + u.email  + "</td>";
            html += "</tr>";
        }

        document.getElementById("tableau").innerHTML = html;
    });

});
