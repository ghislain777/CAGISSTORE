const { includeCommune } = require("../controllers/commune_controller")
const clientController = require("../controllers/client_controller")
const { includeClient } = require("../controllers/client_controller")
const { Client, Commande, Statutcommande, Adresse, Panier, Lignepanier, Produit, Media, Transporteur, Moyendepayement} = require("../models")

const clientService = {}

 clientService.getClientData = async (idClient) => {
return new Promise((resolve, reject) => {

    const retour = {}

    const promiseCommande = Commande.findAll({
        order:[['id', 'desc']],
        where: {
            client: idClient
        },
        include: [
            { model: Client },
            {model:Statutcommande},
            {model:Transporteur},
            {model:Moyendepayement},
            'livraison',
            'facturation',
            {model:Panier, include:[{model:Lignepanier, include:[{model: Produit, include:[{model:Media}]}]}]}
        ]
    })

 const promiseAdresse =   Adresse.findAll({
        where: {
            client: idClient
        },
        include: [{ model: Client }]
    })

    Promise.all([ promiseCommande, promiseAdresse ]).then(resultat => {
        retour.commandes = resultat[0]
        retour.adresses = resultat[1]
        resolve(retour)
    })
})
}

module.exports = clientService