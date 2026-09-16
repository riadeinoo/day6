/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


 
let riad = {               //objet origine
    name:"riadeino",
    likes: {
        game:"all",
        song:"all",
        country:"all"
    }
}

let fakeriad = {...riad}            //objet copie, liee a l'origine
fakeriad.likes.game = "mhfu"        //change la copie et l'origine



let trueclone = structuredClone(riad)          //donne un clone veritable independant non liee a l'origine



console.log(fakeriad)
console.log(riad)