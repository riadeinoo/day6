/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let candidats = [
    {nom: "leo", score: 15},
    {nom: "farnese", score: 20},
    {nom: "riad", score: 7}
]


function loser(candidats) {
    let loser = []
    for (let i =0; i < candidats.length; i++){
        if (candidats[i].score <= 10){
        loser.push(candidats[i])
        }
    }
    return loser;
}
console.log(loser(candidats))
