

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Fournisseur, Media  } = require('../models');
    const fournisseurController = {}
    
 fournisseurController.includeFournisseur = [
    Media
        ]
 fournisseurController.add = async (req, res) => {
        try {
            const response = await Fournisseur.create(req.body)
    
    const retour = await Fournisseur.findOne({
        where:{
            id:response.id
        },
        include: fournisseurController.includeFournisseur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 fournisseurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Fournisseur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: fournisseurController.includeFournisseur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 fournisseurController.update = async (req, res) => {
        try {
            const response = await Fournisseur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const fournisseur = await Fournisseur.findOne({
                where: { id: req.params.id },
                include: fournisseurController.includeFournisseur
            })
            res.status(200).send(fournisseur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 fournisseurController.delete = async (req, res) => {
        try {
            const response = await Fournisseur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Fournisseur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 fournisseurController.getById = async (req, res) => {
        try {
            const response = await Fournisseur.findOne({
                where: { id: req.params.id },
                include: fournisseurController.includeFournisseur
            })
            if (response == null) {
                res.status(404).send('Fournisseur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 fournisseurController.getBy = async (req, res) => {
        try {
          const  response = await Fournisseur.findAndCountAll({
                where: req.body,
                include: fournisseurController.includeFournisseur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = fournisseurController
