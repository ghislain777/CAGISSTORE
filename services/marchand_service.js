const { includeCommune } = require("../controllers/commune_controller")
const marchandController = require("../controllers/marchand_controller")
const { includeMarchand } = require("../controllers/marchand_controller")
const mouvementdestockController = require("../controllers/mouvementdestock_controller")
const { Marchand, Compte, Employe, Stock, Achat, Typedecompte, Mouvementdecompte, Mouvementdestock, Reversement } = require("../models")

const marchandService = {}

 marchandService.getmarchandData = async (idmarchand) => {
return new Promise((resolve, reject) => {

    const retour = {}

    const promiseCompte = Compte.findOne({
        where: {
            marchand: idmarchand
        },
        include: [
            { model: Marchand }
        ]
    })

 const promiseStock =   Stock.findOne({
        where: {
            marchand: idmarchand
        },
        include: [{ model: Marchand }]
    })

   const promoseMouvementdecomptes =  Mouvementdecompte.findAll({
        include: [{model:Compte, where:{marchand:idmarchand}}],
        order: [["id", "desc"]],
        limit: 20,
        
    })

 const promiseMovementdestocks =    Mouvementdestock.findAll({
        include:[{model:Stock, where:{marchand:idmarchand}}],
        order: [["id", "desc"]],
        limit: 20

    })

  const promiseReversements = Reversement.findAll({
        where: {
            marchand: idmarchand
        },
        limit: 20,
        order: [["id", "desc"]],
        include: [Marchand]
    })

    const promiseAchats = Achat.findAll({
        where:{
            marchand: idmarchand
        },
        include:[{model:Marchand}, {model:Employe}],
        order:[["id", "desc"]],
        limit:20,
    
    })

    Promise.all([ promiseCompte, promiseStock, promoseMouvementdecomptes, promiseMovementdestocks, promiseReversements, promiseAchats ]).then(resultat => {
        retour.compte = resultat[0]
        retour.stock = resultat[1]
        retour.mouvementdecomptes = resultat[2]
        retour.mouvementdestocks = resultat[3]
        retour.reversements = resultat[4]
        retour.achats = resultat[5]
        resolve(retour)
    })
})
}

module.exports = marchandService