

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Commande,
         Client,
          Panier,
           Transporteur,
            Moyendepayement,
             Adresse,
              Statutcommande,
              Parametre,
              Quartier,
              Commune,
              Ville
             } = require('../models');
const ImpressionCommandeService = require('../services/documents/commande/impression_commande_service');
    const commandeController = {}
    
 commandeController.includeCommande = [
    Client,Panier,Transporteur,Moyendepayement,{model:Adresse, as:'livraison', include:[{model:Quartier, include:[{model:Commune, include:[Ville]}]}]}, 'facturation',Statutcommande,]

 
//****Ajout d'une nouvelle commande */

commandeController.add = async (req, res) => {
    // recuperation des variables postés
    
    const {client,
         panier,  
         transporteur, 
         moyendepayement,
         montantht, 
         montantttc,
         montanttaxe,
        montanttransport,
        delaisdelivraison, 
        adressedelivraison,
        adressedefacturation,
        nouvelleAdressefacturation,
        nouvelleadresselivraison,
        livrerAladresseDeFacturation
        } = req.body
    
        console.log(req.body)
        
    let facturationAddress ;
    let deliveryAddress;
    //try {
        
        if(adressedefacturation.id == 0 || nouvelleAdressefacturation == 'true') {
            // c'est une nouvelle adresse de facturation
            facturationAddress = await Adresse.create({
                alias:`${adressedefacturation.nom} ${adressedefacturation.prenom}`,
                nom: adressedefacturation.nom,
                prenom:adressedefacturation.prenom,
                client:+client.id,
                quartier:+adressedefacturation.quartier,
                adresse:adressedefacturation.adresse,
                telephone:adressedefacturation.telephone,
               // alias:adressedefacturation.alias
            })
            
        }
        else {

            facturationAddress = await Adresse.findByPk(+adressedefacturation.id)
        }
        
        if(livrerAladresseDeFacturation == true) {
            deliveryAddress = facturationAddress
        } else {
            if(adressedelivraison.id == 0 || nouvelleadresselivraison == "true") {
                deliveryAddress = await Adresse.create({
                    alias:`${adressedelivraison.nom} ${adressedelivraison.prenom}`,
                    nom: adressedelivraison.nom,
                    prenom:adressedelivraison.prenom,
                    client:+client.id,
                    quartier:+adressedelivraison.quartier,
                    adresse:adressedelivraison.adresse,
                    telephone:adressedelivraison.telephone,
                   // alias:adressedelivraison.alias
                })
            }
            else {
                deliveryAddress = await Adresse.findByPk(+adressedelivraison.id)
            }
        }
        
        const commande = await Commande.create({
        remise:0,
        panier:+panier.id,
        client:+client.id,
        transporteur:+transporteur.id,
        moyendepayement:moyendepayement,
        statutcommande:1,
        delaisdelivraison:`${delaisdelivraison} jours`,
        montantht:+montantht,
        montantttc:(+montantttc) + (+montanttransport),
        totalproduits:+montantttc,
        montanttaxe:+montanttaxe,
        montanttransport:+montanttransport,
        adressedelivraison:deliveryAddress.id,
        adressedefacturation:facturationAddress.id
    })

    
    res.status(201).send(commande)
    // } catch (error) {
    //      console.log(error.stack.split("\n"))
    //         res.status(500).
    //         send( error.stack.split("\n")) 
    // }
    
    }
    
    
 commandeController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Commande.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: commandeController.includeCommande,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 commandeController.update = async (req, res) => {
        try {
            const response = await Commande.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const commande = await Commande.findOne({
                where: { id: req.params.id },
                include: commandeController.includeCommande
            })
            res.status(200).send(commande)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 commandeController.delete = async (req, res) => {
        try {
            const response = await Commande.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Commande supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 commandeController.getById = async (req, res) => {
        try {
            const response = await Commande.findOne({
                where: { id: req.params.id },
                include: commandeController.includeCommande
            })
            if (response == null) {
                res.status(404).send('Commande non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
 commandeController.getBy = async (req, res) => {
        try {
          const  response = await Commande.findAndCountAll({
                where: req.body,
                include: commandeController.includeCommande
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    commandeController.imprimer = async (req, res) => {
    
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
    
        const commande = await Commande.findOne({
            where:{
                id: req.params.id
            },
            inlude:commandeController.includeCommande
        })
       // console.log(commande)
         ImpressionCommandeService.genererCommande(commande,entreprise,res) 
        try {
              
            //res.status(200).send(retour)
        } catch (error) {
             console.log( error.stack.split("\n"))
                res.status(500).send(error.stack.split("\n")) 
        }
    
    }

    
    module.exports = commandeController
