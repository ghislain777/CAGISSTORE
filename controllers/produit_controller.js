

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Produit, Fournisseur, Souscategorie, Media  } = require('../models');
    const produitController = {}
    
 produitController.includeProduit = [
    Fournisseur,Souscategorie,Media
        ]
 produitController.add = async (req, res) => {
        try {
            const response = await Produit.create(req.body)
    
    const retour = await Produit.findOne({
        where:{
            id:response.id
        },
        include: produitController.includeProduit
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 produitController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Produit.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: produitController.includeProduit,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 produitController.update = async (req, res) => {
        try {
            const response = await Produit.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const produit = await Produit.findOne({
                where: { id: req.params.id },
                include: produitController.includeProduit
            })
            res.status(200).send(produit)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 produitController.delete = async (req, res) => {
        try {
            const response = await Produit.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Produit supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 produitController.getById = async (req, res) => {
        try {
            const response = await Produit.findOne({
                where: { id: req.params.id },
                include: produitController.includeProduit
            })
            if (response == null) {
                res.status(404).send('Produit non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 produitController.getBy = async (req, res) => {
        try {
          const  response = await Produit.findAndCountAll({
                where: req.body,
                include: produitController.includeProduit
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = produitController
