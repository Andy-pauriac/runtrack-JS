function compterVoyelles(phrase) {
    var voyelles = ["a", "e", "i", "o", "u", "y"];
    var compteur = 0;

    for (var i = 0; i < phrase.length; i++) {
        var lettre = phrase[i].toLowerCase();
        if (voyelles.includes(lettre)) {
            compteur++;
        }
    }

    console.log("La phrase contient " + compteur + " voyelles.");
}

// Exemples de test
compterVoyelles("Bonjour tout le monde");  // 8
compterVoyelles("JavaScript");             // 3
compterVoyelles("Rhythms");                // 1