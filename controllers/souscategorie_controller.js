

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Souscategorie, Categorie, Media  } = require('../models');
    const souscategorieController = {}
    
 souscategorieController.includeSouscategorie = [
    Categorie,Media
        ]
 souscategorieController.add = async (req, res) => {
        try {
            const response = await Souscategorie.create(req.body)
    
    const retour = await Souscategorie.findOne({
        where:{
            id:response.id
        },
        include: souscategorieController.includeSouscategorie
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 souscategorieController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Souscategorie.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: souscategorieController.includeSouscategorie,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 souscategorieController.update = async (req, res) => {
        try {
            const response = await Souscategorie.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const souscategorie = await Souscategorie.findOne({
                where: { id: req.params.id },
                include: souscategorieController.includeSouscategorie
            })
            res.status(200).send(souscategorie)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 souscategorieController.delete = async (req, res) => {
        try {
            const response = await Souscategorie.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Souscategorie supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 souscategorieController.getById = async (req, res) => {
        try {
            const response = await Souscategorie.findOne({
                where: { id: req.params.id },
                include: souscategorieController.includeSouscategorie
            })
            if (response == null) {
                res.status(404).send('Souscategorie non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 souscategorieController.getBy = async (req, res) => {
        try {
          const  response = await Souscategorie.findAndCountAll({
                where: req.body,
                include: souscategorieController.includeSouscategorie
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = souscategorieController
