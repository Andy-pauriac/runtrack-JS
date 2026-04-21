function estPremier(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemples de test
console.log(sommeNombresPremiers(3, 7));  // 10  (3 et 7 sont premiers)
console.log(sommeNombresPremiers(5, 11)); // 16  (5 et 11 sont premiers)
console.log(sommeNombresPremiers(4, 7));  // false (4 n'est pas premier)
console.log(sommeNombresPremiers(6, 9));  // false (ni l'un ni l'autre)