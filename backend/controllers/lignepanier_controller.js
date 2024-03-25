

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Lignepanier, Produit, Media  } = require('../models');
    const lignepanierController = {}
    
 lignepanierController.includeLignepanier = [
    Produit,Media
        ]
 lignepanierController.add = async (req, res) => {
        try {
            const response = await Lignepanier.create(req.body)
    
    const retour = await Lignepanier.findOne({
        where:{
            id:response.id
        },
        include: lignepanierController.includeLignepanier
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 lignepanierController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Lignepanier.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: lignepanierController.includeLignepanier,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 lignepanierController.update = async (req, res) => {
        try {
            const response = await Lignepanier.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const lignepanier = await Lignepanier.findOne({
                where: { id: req.params.id },
                include: lignepanierController.includeLignepanier
            })
            res.status(200).send(lignepanier)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 lignepanierController.delete = async (req, res) => {
        try {
            const response = await Lignepanier.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Lignepanier supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 lignepanierController.getById = async (req, res) => {
        try {
            const response = await Lignepanier.findOne({
                where: { id: req.params.id },
                include: lignepanierController.includeLignepanier
            })
            if (response == null) {
                res.status(404).send('Lignepanier non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 lignepanierController.getBy = async (req, res) => {
        try {
          const  response = await Lignepanier.findAndCountAll({
                where: req.body,
                include: lignepanierController.includeLignepanier
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = lignepanierController
