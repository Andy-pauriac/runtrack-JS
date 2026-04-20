function jourTravaille(date) {
    var joursFerier2024 = [
        "2024-01-01", // Jour de l'an
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    var jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    var mois  = ["janvier", "février", "mars", "avril", "mai", "juin",
                 "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    var jour  = jours[date.getDay()];
    var numJour = date.getDate();
    var nomMois = mois[date.getMonth()];
    var année = date.getFullYear();

    // Formater la date en "YYYY-MM-DD" pour comparer avec le tableau
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var dd = String(date.getDate()).padStart(2, "0");
    var dateFormatee = date.getFullYear() + "-" + mm + "-" + dd;

    if (joursFerier2024.includes(dateFormatee)) {
        console.log("Le " + jour + " " + numJour + " " + nomMois + " " + année + " est un jour férié.");
    } else if (date.getDay() === 6 || date.getDay() === 0) {
        console.log("Non, " + jour + " " + numJour + " " + nomMois + " " + année + " est un week-end.");
    } else {
        console.log("Oui, " + jour + " " + numJour + " " + nomMois + " " + année + " est un jour travaillé.");
    }
}

// Exemples de test
jourTravaille(new Date("2024-01-01")); // Jour férié
jourTravaille(new Date("2024-01-06")); // Samedi
jourTravaille(new Date("2024-01-07")); // Dimanche
jourTravaille(new Date("2024-01-08")); // Lundi travaillé