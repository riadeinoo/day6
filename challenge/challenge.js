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
let utilisateur = []
let id = 0

function ajouterUtilisateur(noms, email){
    let user = {
        id: "ID-" + id,
        nom: noms,
        email: email
    };
    utilisateur.push(user)
    id++
}


function trouverParEmail(email){
    for (let i =0; i < utilisateur.length; i++){
        if (utilisateur[i].email === email) {        
            return utilisateur[i];  
        }  
    }
    return null;
}

function supprimerParId(id){
    for (let x=0; x < utilisateur.length; x++){      
        if(utilisateur[x].id === id)
        utilisateur.splice(x, 1)
        return;
    }
}







ajouterUtilisateur("farnese", "beijinglover00@gmail.com")

console.log(trouverParEmail("beijinglover00@gmail.com"))
