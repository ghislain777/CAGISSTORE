const {  Panier, Client, Lignepanier, Produit, Quartier, Commune, Ville, Pay  } = require('../models');
const panierController = require("../controllers/panier_controller")



const commandeService = {}

commandeService.calculFraisDeLivraison = async (idPanier, idQuartier, parametres) => {
    const panier = await  Panier.findOne({
        id: idPanier,
        include:panierController.includePanier
    })

    const quartier = await Quartier.findOne({
        where:{id:idQuartier},
        include:[{model:Commune, include:[{model:Ville, include:[Pay]}]}]
    })

    // Par défaut, le cout et les délais  et le delais de livraison est fixe et est parametrable dans la base de données
    
    return {
            fraisdelivraison: +parametres.coutdutransport,
            delaisdelivraisonenheure: +parametres.delaisdelivraisonenheure,
            delaisdelivraisonenjour: +parametres.delaisdelivraisonenjour
    }

}

module.exports = commandeService