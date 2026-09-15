/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function sontIdentiques(c1,c2) {
    let keys1 = Object.keys(c1)
    let keys2 = Object.keys(c2)

if (keys1.length !== keys2.length){
    return false;
}
for (let key of keys1) {
        if (c1[key] !== c2[key]) {
            return false; 
    }
}
return true
}

let temp = []

let classeA = {
    eleves: 21,
    moyenne: 14,
    prof: "hamza",
}

let classeB = {
    eleves: 21,
    moyenne: 15,
    prof: "farnese",
}

 console.log(sontIdentiques(classeA, classeB))