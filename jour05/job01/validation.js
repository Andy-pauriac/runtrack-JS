
function emailValide(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

l
function motdepasseValide(mdp) {
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(mdp);
}



function codepostalValide(cp) {
    var regex = /^\d{5}$/;
    return regex.test(cp);
}

function afficherErreur(idErreur, message) {
    document.getElementById(idErreur).textContent = message;
}

function effacerErreur(idErreur) {
    document.getElementById(idErreur).textContent = "";
}


function validerInscription() {

    var ok = true;

    var prenom       = document.getElementById("prenom").value;
    var nom          = document.getElementById("nom").value;
    var email        = document.getElementById("email").value;
    var motdepasse   = document.getElementById("motdepasse").value;
    var confirmation = document.getElementById("confirmation").value;
    var adresse      = document.getElementById("adresse").value;
    var codepostal   = document.getElementById("codepostal").value;

    // verification du prenom (async)
    setTimeout(function() {
        if (prenom == "") {
            afficherErreur("erreurPrenom", "Le prénom est obligatoire");
            ok = false;
        } else if (prenom.length < 2) {
            afficherErreur("erreurPrenom", "Le prénom est trop court");
            ok = false;
        } else {
            effacerErreur("erreurPrenom");
        }
    }, 0);


    setTimeout(function() {
        if (nom == "") {
            afficherErreur("erreurNom", "Le nom est obligatoire");
            ok = false;
        } else if (nom.length < 2) {
            afficherErreur("erreurNom", "Le nom est trop court");
            ok = false;
        } else {
            effacerErreur("erreurNom");
        }
    }, 0);


    setTimeout(function() {
        if (email == "") {
            afficherErreur("erreurEmail", "L'email est obligatoire");
            ok = false;
        } else if (!emailValide(email)) {
            afficherErreur("erreurEmail", "L'email n'est pas valide");
            ok = false;
        } else {
            effacerErreur("erreurEmail");
        }
    }, 0);


    setTimeout(function() {
        if (motdepasse == "") {
            afficherErreur("erreurMotdepasse", "Le mot de passe est obligatoire");
            ok = false;
        } else if (!motdepasseValide(motdepasse)) {
            afficherErreur("erreurMotdepasse", "Min 8 caractères avec une lettre, un chiffre et un caractère spécial");
            ok = false;
        } else {
            effacerErreur("erreurMotdepasse");
        }
    }, 0);

   
    setTimeout(function() {
        if (confirmation == "") {
            afficherErreur("erreurConfirmation", "La confirmation est obligatoire");
            ok = false;
        } else if (confirmation != motdepasse) {
            afficherErreur("erreurConfirmation", "Les mots de passe ne correspondent pas");
            ok = false;
        } else {
            effacerErreur("erreurConfirmation");
        }
    }, 0);

    setTimeout(function() {
        if (adresse == "") {
            afficherErreur("erreurAdresse", "L'adresse est obligatoire");
            ok = false;
        } else {
            effacerErreur("erreurAdresse");
        }
    }, 0);

    setTimeout(function() {
        if (codepostal == "") {
            afficherErreur("erreurCodepostal", "Le code postal est obligatoire");
            ok = false;
        } else if (!codepostalValide(codepostal)) {
            afficherErreur("erreurCodepostal", "Le code postal doit contenir 5 chiffres");
            ok = false;
        } else {
            effacerErreur("erreurCodepostal");
        }
    }, 0);

 
    setTimeout(function() {
        var erreurs = document.querySelectorAll(".erreur");
        var formulaireOk = true;

        for (var i = 0; i < erreurs.length; i++) {
            if (erreurs[i].textContent != "") {
                formulaireOk = false;
            }
        }

        if (formulaireOk) {
            document.getElementById("succes").style.display = "block";
        }
    }, 50);

}


function validerConnexion() {

    var email      = document.getElementById("email").value;
    var motdepasse = document.getElementById("motdepasse").value;

    setTimeout(function() {
        if (email == "") {
            afficherErreur("erreurEmail", "L'email est obligatoire");
        } else if (!emailValide(email)) {
            afficherErreur("erreurEmail", "L'email n'est pas valide");
        } else {
            effacerErreur("erreurEmail");
        }
    }, 0);

    setTimeout(function() {
        if (motdepasse == "") {
            afficherErreur("erreurMotdepasse", "Le mot de passe est obligatoire");
        } else if (motdepasse.length < 6) {
            afficherErreur("erreurMotdepasse", "Le mot de passe est trop court");
        } else {
            effacerErreur("erreurMotdepasse");
        }
    }, 0);

    setTimeout(function() {
        var erreurs = document.querySelectorAll(".erreur");
        var formulaireOk = true;

        for (var i = 0; i < erreurs.length; i++) {
            if (erreurs[i].textContent != "") {
                formulaireOk = false;
            }
        }

        if (formulaireOk) {
            document.getElementById("succes").style.display = "block";
        }
    }, 50);

}
