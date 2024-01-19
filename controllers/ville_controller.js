

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Ville, Pay  } = require('../models');
    const villeController = {}
    
 villeController.includeVille = [
    Pay,]
 villeController.add = async (req, res) => {
        try {
            const response = await Ville.create(req.body)
    
    const retour = await Ville.findOne({
        where:{
            id:response.id
        },
        include: villeController.includeVille
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 villeController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Ville.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: villeController.includeVille,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 villeController.update = async (req, res) => {
        try {
            const response = await Ville.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const ville = await Ville.findOne({
                where: { id: req.params.id },
                include: villeController.includeVille
            })
            res.status(200).send(ville)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 villeController.delete = async (req, res) => {
        try {
            const response = await Ville.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Ville supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 villeController.getById = async (req, res) => {
        try {
            const response = await Ville.findOne({
                where: { id: req.params.id },
                include: villeController.includeVille
            })
            if (response == null) {
                res.status(404).send('Ville non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 villeController.getBy = async (req, res) => {
        try {
          const  response = await Ville.findAndCountAll({
                where: req.body,
                include: villeController.includeVille
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = villeController
