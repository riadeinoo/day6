/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 07 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * TABLEAU D'OBJETS BASIQUE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un tableau contenant 3 objets représentant des livres (titre, auteur). Affichez le titre du 2ème livre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-07
 * ▶️ Commande : node day06/exercices/exercice-07.js
 */
'use strict';

// 1. Identifie les données nécessaires.
let books = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry" },
    { titre: "1984", auteur: "George Orwell" },
    { titre: "L'Alchimiste", auteur: "Paulo Coelho" }
];
console.log(books[1].titre)
