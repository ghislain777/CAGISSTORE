

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Lignecommande, Produit, Commande, Media  } = require('../models');
    const lignecommandeController = {}
    
 lignecommandeController.includeLignecommande = [
    Produit,Commande,Media
        ]
 lignecommandeController.add = async (req, res) => {
        try {
            const response = await Lignecommande.create(req.body)
    
    const retour = await Lignecommande.findOne({
        where:{
            id:response.id
        },
        include: lignecommandeController.includeLignecommande
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 lignecommandeController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Lignecommande.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: lignecommandeController.includeLignecommande,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 lignecommandeController.update = async (req, res) => {
        try {
            const response = await Lignecommande.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const lignecommande = await Lignecommande.findOne({
                where: { id: req.params.id },
                include: lignecommandeController.includeLignecommande
            })
            res.status(200).send(lignecommande)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 lignecommandeController.delete = async (req, res) => {
        try {
            const response = await Lignecommande.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Lignecommande supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 lignecommandeController.getById = async (req, res) => {
        try {
            const response = await Lignecommande.findOne({
                where: { id: req.params.id },
                include: lignecommandeController.includeLignecommande
            })
            if (response == null) {
                res.status(404).send('Lignecommande non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 lignecommandeController.getBy = async (req, res) => {
        try {
          const  response = await Lignecommande.findAndCountAll({
                where: req.body,
                include: lignecommandeController.includeLignecommande
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = lignecommandeController
