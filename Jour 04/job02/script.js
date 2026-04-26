// fonction qui prend un json et une clé et retourne la valeur
function jsonValueKey(jsonString, key) {
    var obj = JSON.parse(jsonString);
    return obj[key];
}

// json de test
var monJson = '{"name":"La Plateforme_","address":"8 rue d hozier","city":"Marseille","nb_staff":"11","creation":"2019"}';

function tester() {
    var cle = document.getElementById("cle").value;
    var valeur = jsonValueKey(monJson, cle);

    if (valeur == undefined) {
        document.getElementById("resultat").textContent = "Clé introuvable";
    } else {
        document.getElementById("resultat").textContent = cle + " = " + valeur;
    }
}
