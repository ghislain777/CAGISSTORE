const {  Panier, Client, Lignepanier, Produit, Quartier, Commune, Ville, Pay  } = require('../models');
const panierController = require("../controllers/panier_controller")



const commandeService = {}

commandeService.calculFraisDeLivraison = async (idPanier, idQuartier) => {
    const panier = await  Panier.findOne({
        id: idPanier,
        include:panierController.includePanier
    })

    const quartier = await Quartier.findOne({
        where:{id:idQuartier},
        include:[{model:Commune, include:[{model:Ville, include:[Pay]}]}]
    })

    // Livraison partout à conakry à 20000 et en 24 heures
    return {
            fraisdelivraison: 20000,
            delaisdelivraisonenheure: 24,
            delaisdelivraisonenjour: 1
    }

}

module.exports = commandeService