

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Panier, Client, Lignepanier, Produit, Quartier, Commune, Ville, Pay  } = require('../models');
const { panier } = require('./web_controller');
const commandeService = require('../services/commande_service');
    const panierController = {}
    
 panierController.includePanier = [
    Client, {model:Lignepanier, include:[Produit]}]

    ///*****calcul des frais de livraison pour un panier */




    panierController.fraisdelivraison = async (req, res) => {
// calcul des frais de livraison en fonction du panier et du quartier
        const retour = commandeService.calculFraisDeLivraison(req.params.id,req.body.quartier)
        res.status(200).send(retour)      
    }


 panierController.add = async (req, res) => {
        try {
            const response = await Panier.create(req.body)
    
    const retour = await Panier.findOne({
        where:{
            id:response.id
        },
        include: panierController.includePanier
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 panierController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Panier.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: panierController.includePanier,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 panierController.update = async (req, res) => {
        try {
            const response = await Panier.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const panier = await Panier.findOne({
                where: { id: req.params.id },
                include: panierController.includePanier
            })
            res.status(200).send(panier)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 panierController.delete = async (req, res) => {
        try {
            const response = await Panier.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Panier supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 panierController.getById = async (req, res) => {
        try {
            const response = await Panier.findOne({
                where: { id: req.params.id },
                include: panierController.includePanier
            })
            if (response == null) {
                res.status(404).send('Panier non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 panierController.getBy = async (req, res) => {
        try {
          const  response = await Panier.findAndCountAll({
                where: req.body,
                include: panierController.includePanier
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = panierController
