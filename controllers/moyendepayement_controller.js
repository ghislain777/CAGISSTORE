

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Moyendepayement, Media  } = require('../models');
    const moyendepayementController = {}
    
 moyendepayementController.includeMoyendepayement = [
    Media
        ]
 moyendepayementController.add = async (req, res) => {
        try {
            const response = await Moyendepayement.create(req.body)
    
    const retour = await Moyendepayement.findOne({
        where:{
            id:response.id
        },
        include: moyendepayementController.includeMoyendepayement
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 moyendepayementController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Moyendepayement.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: moyendepayementController.includeMoyendepayement,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 moyendepayementController.update = async (req, res) => {
        try {
            const response = await Moyendepayement.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const moyendepayement = await Moyendepayement.findOne({
                where: { id: req.params.id },
                include: moyendepayementController.includeMoyendepayement
            })
            res.status(200).send(moyendepayement)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 moyendepayementController.delete = async (req, res) => {
        try {
            const response = await Moyendepayement.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Moyendepayement supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 moyendepayementController.getById = async (req, res) => {
        try {
            const response = await Moyendepayement.findOne({
                where: { id: req.params.id },
                include: moyendepayementController.includeMoyendepayement
            })
            if (response == null) {
                res.status(404).send('Moyendepayement non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 moyendepayementController.getBy = async (req, res) => {
        try {
          const  response = await Moyendepayement.findAndCountAll({
                where: req.body,
                include: moyendepayementController.includeMoyendepayement
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = moyendepayementController
