/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let candidats = [
    {nom: "leo", score: 15},
    {nom: "farnese", score: 20},
    {nom: "riad", score: 7}
]

function score(candidats){
    let beststudent = candidats[0].nom
    let bestscore = candidats[0].score

for (let x = 0; x < candidats.length; x++){
    if (candidats[x].score > bestscore) {
        bestscore = candidats[x].score
        beststudent = candidats[x].nom
        }
    }
    return {
        nom: beststudent,
        score: bestscore
    }
}
console.log(score(candidats))