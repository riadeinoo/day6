/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let utilisateurs = [];
let id = 1
function ajouterUtilisateur(nom, email){
    let user = {
        id: "ID-" + id,
        nom: nom,
        email: email,
    }
    utilisateurs.push(user)
    id++
}
function trouverParEmail(email){
    for ( let i = 0; i < utilisateurs.length; i++){
        if (utilisateurs[i].email === email) {
        return utilisateurs[i];
       }     
     }
    return null;
    }
function supprimerParId(id){
    for (let x = 0; x < utilisateurs.length; x++){
        if(utilisateurs[x].id === id){
            utilisateurs.splice(x, 1)
        }
    }
}

function afficherAnnuaire(){
    for(let y = 0; y < utilisateurs.length; y++){
        if (utilisateurs[y] !== null){
            console.log(utilisateurs[y]);
        }
    }
}




ajouterUtilisateur("farnese", "beinjinglover00@gmail.com");
ajouterUtilisateur("riadeino", "fakestriadeino@gmail.com");
afficherAnnuaire()