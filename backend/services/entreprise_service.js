
const {Parametre} = require('../models')
entrepriseService = {}

entrepriseService.getEntreprise = async () => {
    const parametresDb = await Parametre.findAll()
    let entreprise = {
       nom: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_NOM").valeur,
       slogan: "Le meilleur du shopping en ligne",
       logo: "public/fichiers/logo.png",
       favicon: "/assets/images/logo/favicon.ico",
       telephone: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_TELEPHONE").valeur,
       email: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_EMAIL").valeur,
       couleur: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_COULEUR").valeur,
       adresseLigne1: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_LIGNE1").valeur,
       adresseLigne2: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_LIGNE2").valeur,
       devise: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_DEVISE").valeur,
       tva: +parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_TVA").valeur,
       facebook: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_FACEBOOK").valeur,
       prefixe:"CMD",
       afficherPhotos: false,
       afficherRemises:false,
       afficherTableauPayement: false,
       afficherTableauModalites: false,
       piedDePage:`${parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_NOM").valeur} | ${parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_TELEPHONE").valeur} | ${parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_EMAIL").valeur}`,
       typedeDocument:"Commande"
    }
    console.log(entreprise)
return entreprise
}

module.exports = entrepriseService