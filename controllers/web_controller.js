const {
    response,
    request
} = require('express');
const {
    where
} = require('sequelize');
const {
    Sequelize,
    Op
} = require('sequelize');
const fonctions = require('../fonctions');
const {
    Produit,
    Categorie,
    Commande,
    Adresse,
    Ville,
    Quartier,
    Commune,
    Pay,
    Client,
    Panier,
    Lignepanier,
    Media,
    Parametre,
    Moyendepayement,
    Transporteur,
    Souscategorie
} = require('../models');
const boutique = require("../config/shop")
const categorieController = require('./categorie_controller')
const produitController = require("./produit_controller")
const panierController = require("./panier_controller")
const {
    validationResult
} = require("express-validator");
const session = require('express-session');
const composants = require('../data/composants');
const clientService = require("../services/client_service");
const commandeService = require('../services/commande_service');


const webController = {}


webController.panier = (req, res) => {
    res.render('panier.html', req.parametre)
}

webController.commande = (req, res) => {
   // console.log("Nouvel utilisateur")
   // console.log(req.parametre.utilisateur)
    res.render('commande.html', req.parametre)
}

webController.login = async (req, res) => {
    res.render('login.html', req.parametre)
}

webController.profil = async (req, res) => {
    res.render('profil.html', req.parametre)
}

// /login
webController.connexion = async (req, res) => {
    const {
        telephone,
        motdepasse
    } = req.body

    // on connecte l'abonné
    const client = await Client.findOne({
        where: {
            telephone: telephone,
            motdepasse: motdepasse
        },
        include:[{model:Adresse, include:[{model:Quartier, include:[{model:Commune, include:[Ville]}]}]}, {model:Quartier, include:[{model:Commune, include:[Ville]}]}]
    })
    //console.log(client)

    if (client == null) {
        req.session.utilisateur = null
        const parametre = req.parametre
        // page de connexion
        parametre.page = {
            nom: "Connexion",
            section: "Login",
            item: "Login"
        }
        parametre.alerte = {
            open: true,
            message: "Numéro de téléphone ou mot de passe incorrecte, veuillez réessayer ou créer votre compte",
            type: "alert-danger"
        }

        res.render('login.html', parametre)
    } else {
        req.session.utilisateur = client
        const parametre = req.parametre
         parametre.utilisateur = client
       const data = await clientService.getClientData(client.id)
        parametre.commandes = data.commandes
        req.session.commandes = data.commandes
        res.render('produits.html', parametre)

    }



}

// page des produits
webController.produits = async (req, res) => {
    //req.session.destroy();
   // console.log("affichade du panier****************************************   ")
   // console.log(req.session.panier)
    const parametre = req.parametre
    //console.log(parametre.panier)
   // req.session.destroy();
    res.render('produits.html', parametre)
}

// detail de produit
webController.details = async (req, res) => {
    const parametre = req.parametre
    /// console.log(req.params.id
    const produit = await Produit.findOne({
        where: {
            id: req.params.id
        },
        include: produitController.includeProduit
    })



    if (produit == null) {
        res.render("404.html", parametre)
    } else {

        parametre.produit = produit
        res.render('produits_detail.html', parametre)
    }
}

webController.inscription = async (req, res) => {
    const errors = validationResult(req).errors
    //console.log(errors)
    const parametre = req.parametre
    parametre.page = {
        nom: "Inscription",
        section: "Inscription",
        item: "Inscription"
    }
    // recuperation des villes
    const villes = await Ville.findAll({
        include: [
            Commune
        ],
    })
    //console.log(villes)
    parametre.villes = villes
    //console.log(req.method)
    if (req.method == 'GET') {
        // verification de la variable session
       // console.log(req.session)
        res.render('inscription.html', parametre)

    }
    if (req.method == 'POST') {
        // on recupere les variables POST
        if (errors.length == 0) { // les données sont valides, on enregistre le client

            let client = await Client.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (client != null) {
                parametre.alerte = {
                    ...parametre.alerte,
                    message: "Cette adresse email est déjà enregistrée dans notre base de données.",
                    open: true
                }
                res.render('inscription.html', parametre)
            } else {
                client = await Client.findOne({
                    where: {
                        telephone: req.body.telephone
                    }
                })
                if (client != null) {
                    parametre.alerte = {
                        ...parametre.alerte,
                        message: "Ce numéro de téléphone existe déjà dans notre base de données",
                        open: true
                    }
                    res.render('inscription.html', parametre)
                } else {
                    // on inscrit le client
                    const utilisateur = await Client.create(req.body)

                    const client = await Client.findOne({
                        where:{
                            id: utilisateur.id
                        },
                        include:[{model:Adresse, include:[{model:Quartier, include:[{model:Commune, include:[Ville]}]}]}, {model:Quartier, include:[{model:Commune, include:[Ville]}]}]
                
                    })
                    parametre.utilisateur = client
                    parametre.commandes = []
                    req.session.utilisateur = client
                    res.render('profil.html', parametre)
                }

            }

        } else { // Les données ne sont pas valides
            console.log(errors)
            const alerte = {
                alerte: {
                    type: "alert-danger",
                    message: errors[0].msg,
                    open: true
                }
            }
            res.render("inscription.html", {
                ...parametre,
                ...alerte
            })
        }

    }

}

///*** page des sous categories */
webController.souscategorie = async (req, res) => {

const {id, nom} = req.params

const souscategorie = await Souscategorie.findOne({
    where:{
        id:id
    },
    include:[{model:Produit, include:[{model:Media}]}]
})

const parametre = req.parametre
parametre.souscategorie = souscategorie
res.render("souscategorie.html", parametre)

}

webController.error404 = async (req, res) => {
    // on veririfie si la route n'est pas la route d'une sous-catégorie

//fonctions.toSEOFriend(souscategorie.nom)

// on recherche la souscategorie correcpondant

// const souscategorie = await Souscategorie.findOne({
//     where:{
//         nom:
//     }
// })

    const parametre = req.parametre
    res.render("404.html", parametre)

}

// ajout d'un produit dans le panier
webController.ajoutdanspanier = async (req, res) => {
    const parametre = req.parametre
    const produit = await Produit.findByPk(req.params.id)
   // console.log("id de la sessison")
   // console.log(req.session.id)
    let panier = req.session?.panier ?? null
    //console.log(panier)
    if (panier == null) { // c'est son premier produit à ajouter dans le panier, dans ce cas on cree le panier
        panier = await Panier.create({
            session: req.session.id,
            client: req.session.utilisateur?.id ?? null,
        })
    }
    // on verifie si le produit est deja dans le panier
    const laligne = await Lignepanier.findOne({
        where:{
            panier:panier.id,
            produit:produit.id
        }
    })
    if(laligne == null) {
         const lignePanier = await Lignepanier.create({
        panier: panier.id,
        quantite: +req.body.quantite,
        produit: produit.id,
        prixunitaire: produit.prixdevente,
        prixtotal: produit.prixdevente * req.body.quantite
    })
    }
    else {
        await Lignepanier.update({quantite: laligne.quantite + (+req.body.quantite), prixtotal:produit.prixdevente *(laligne.quantite + (+req.body.quantite)) }, {where:{id:laligne.id}})
    }
    
// on met à jour les nouvaux prix du panier

    const lepanier = await Panier.findOne({
        where: {
            id: panier.id
        },
        include: [{model:Lignepanier, include:[{model:Produit, include:[Media]}]}]
    })

// calcul des totaux du panier
const totaux = lepanier.Lignepaniers.reduce((resultat, ligne) => ({quantiteTotale: resultat.quantiteTotale+ligne.quantite, prixTotal: resultat.prixTotal+ligne.prixtotal}), {quantiteTotale:0, prixTotal:0})
// on met à jour les prix du panier
await Panier.update({ totalproduits: totaux.quantiteTotale, montantht: totaux.prixTotal, montanttaxe:totaux.prixTotal*parametre.entreprise.tva/100, montantttc:totaux.prixTotal+(totaux.prixTotal*parametre.entreprise.tva/100)},{where:{id:panier.id}})

// on relance la requete de panier
const retour = await Panier.findOne({
    where: {
        id: panier.id
    },
    include: [{model:Lignepanier, include:[{model:Produit, include:[Media]}]}]
})


//console.log(totaux)
lepanier.totaux = totaux
    req.session.panier = retour
    console.log(req.session.panier)
    res.status(200).send(retour)

}


// *****on enlève un peoduit du panier******///
webController.enleverdupanier = async (req, res) => {
const parametre = req.parametre
const lignepanier = await Lignepanier.findByPk(req.params.id)
const panier = await Panier.findByPk(lignepanier.panier)
await Lignepanier.destroy({where:{id:req.params.id}})

// on recalcule les montant du panier

const lepanier = await Panier.findOne({
    where: {
        id: panier.id
    },
    include: [{model:Lignepanier, include:[{model:Produit, include:[Media]}]}]
})

// calcul des totaux du panier
const totaux = lepanier.Lignepaniers.reduce((resultat, ligne) => ({quantiteTotale: resultat.quantiteTotale+ligne.quantite, prixTotal: resultat.prixTotal+ligne.prixtotal}), {quantiteTotale:0, prixTotal:0})
// on met à jour les prix du panier
await Panier.update({ totalproduits: totaux.quantiteTotale, montantht: totaux.prixTotal, montanttaxe:totaux.prixTotal*parametre.entreprise.tva/100, montantttc:totaux.prixTotal+(totaux.prixTotal*parametre.entreprise.tva/100)},{where:{id:panier.id}})

// on relance la requete de panier
const retour = await Panier.findOne({
where: {
    id: panier.id
},
include: [{model:Lignepanier, include:[{model:Produit, include:[Media]}]}]
})


//console.log(totaux)
lepanier.totaux = totaux
req.session.panier = retour
console.log(req.session.panier)
res.status(200).send(retour)

}


///***** variables de session */
////************************** */
webController.getParametre = async (req, res, next) => {

    ///**** Les modes de payement */
    const moyendepayements = await Moyendepayement.findAll({
        where:{actif:true}
    })
   
   const parametresDb = await Parametre.findAll()
   
    const parametre = {}

    parametre.moyendepayements = moyendepayements

    const categories = await Categorie.findAll({
        include: categorieController.includeCategorie
    })
    const produits = await Produit.findAll({
        include: produitController.includeProduit
    })

    let produitsAvecImages = []
    produits.forEach((produit) => {
        if (produit.Media.length === 0) {
            produit.Media.push({
                fichier: "/fichiers/logo.png"
            })
        }
        produitsAvecImages.push(produit)
    })

    parametre.entreprise = {
     nom: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_NOM").valeur,
    slogan: "Le meilleur du shopping en ligne",
    logo: "../assets/images/logo/logoBoutique.png",
    favicon: "/assets/images/logo/favicon.ico",
    telephone: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_TELEPHONE").valeur,
    email: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_EMAIL").valeur,
    couleur: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_COULEUR").valeur,
    adresse: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_ADRESSE_LIGNE1").valeur,
    devise: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_DEVISE").valeur,
    tva: +parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_TVA").valeur,
    facebook: parametresDb.find((param, index, array) => param.nom =="BOUTIQUE_FACEBOOK").valeur,

    }

    // neseddaire pour la page inscription (villes)
    const villes = await Ville.findAll({
        include: [
            Commune
        ],
    })
   
    const transporteurs = await Transporteur.findAll({
        where:{
            actif:true
        }
    })
  
    

    parametre.villes = villes
  //  parametre.quartiers = quartiers
    parametre.transporteurs = transporteurs
  //  parametre.communes = communes

    //parametre.entreprise = boutique.entreprise
    parametre.modalites = boutique.modalites
    parametre.fonctions = fonctions
    parametre.composants = composants
    parametre.categories = categories
    parametre.produits = produitsAvecImages
    parametre.connecte = false

    parametre.utilisateur = req.session?.utilisateur ?? null
    if(req.session.panier == null || req.session.panier == "undefined") {
        parametre.panier = null
    }
    else {
        parametre.panier = req.session.panier
        const totaux = parametre.panier.Lignepaniers.reduce((resultat, ligne) => ({quantiteTotale: resultat.quantiteTotale+ligne.quantite, prixTotal: resultat.prixTotal+ligne.prixtotal}), {quantiteTotale:0, prixTotal:0})
        parametre.panier.totaux = totaux
    }
    parametre.livraison = {
            fraisdelivraison: 0,
            delaisdelivraisonenheure: 0,
            delaisdelivraisonenjour: 0
    }  
if( req.session.utilisateur != undefined || req.session.utilisateur != null) {
    req.session.utilisateur = await Client.findOne({
        where:{
            id:req.session.utilisateur.id
        },
        include:[{model:Adresse, include:[{model:Quartier, include:[{model:Commune, include:[Ville]}]}]}, {model:Quartier, include:[{model:Commune, include:[Ville]}]}]

    })
    const livraison = await commandeService.calculFraisDeLivraison(0, parametre.utilisateur.quartier)
    parametre.utilisateur = req.session.utilisateur
    parametre.livraison = livraison
    req.session.livraison = livraison

    const data = await  clientService.getClientData(req.session.utilisateur.id)
    req.session.commandes = data.commandes
    parametre.commandes = data.commandes


}
   // parametre.panier = req.session?.panier ?? null
    //parametre.totalProduits = req.session?.panier == null? 0 : req.session.panier.Lignepaniers.reduce((quantite, ligne) => ligne.quantite+quantite,0);
    parametre.alerte = {
        open: false,
        message: "Le message de l'alerte",
        type: "alert-danger" // peut être aussi "alert-success"
    }
    parametre.page = webController.getPage(req.path)
    req.parametre = parametre
    next()

}

// webController.supprimerAdresse = async (req, res) => {
//     await Adresse.delete({
//         where:{
//             id:req.params.id
//         }
//     })
// console.log(`Suppression de l'adresse réussie`)
// res.send("ok")

// }


webController.confirmationCommande = async (req, res) => {

const parametre = req.parametre
req.session.panier = null
parametre.panier = null
// on actualise la liste eds commandes
const data = await clientService.getClientData(req.session.utilisateur.id)
        parametre.commandes = data.commandes
// if(req.query.statut === "succes") {
//     req.session.panier = null
// }

parametre.statut = req.query.statut
    res.render("confirmation_commande.html", parametre)
}



///***deconnexion de l'utilisateur */
webController.deconnexion = async (req, res) => {

    req.session.panier = null
    req.session.utilisateur = null
    const parametre = req.parametre
    parametre.panier = null
    parametre.utilisateur = null
res.render("login.html", parametre)

}



webController.getPage = (path) => {
    switch (path) {
        case "/":
            return {
                nom: "Acceuil",
                    section: "Acceuil",
                    item: "Produits"
            }
            case "/login":
                return {
                    nom: "Acceuil",
                        section: "Mon compte",
                        item: "Login"
                }
                case "/inscription":
                    return {
                        nom: "Acceuil",
                            section: "Mon compte",
                            item: "Inscription"
                    }
                    case "/connexion":
                    return {
                        nom: "Acceuil",
                            section: "Mon compte",
                            item: "Connexion"
                    }
                    case "/profil":
                    return {
                        nom: "Mon compte",
                            section: "Mon compte",
                            item: "profil"
                    }
                    case "/panier":
                        return {
                            nom: "Panier",
                                section: "Boutique",
                                item: "Panier"
                        }
                        case "/commande":
                            return {
                                nom: "Commande",
                                    section: "Boutique",
                                    item: "Commmande"
                            }
    



                    default:
                         
                    return {
                        nom: "Acceuil",
                            section: "Boutique",
                            item: "Erreur"
                    }
                        // default code
    };
}


module.exports = webController