

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Transporteur, Media  } = require('../models');
    const transporteurController = {}
    
 transporteurController.includeTransporteur = [
    Media
        ]
 transporteurController.add = async (req, res) => {
        try {
            const response = await Transporteur.create(req.body)
    
    const retour = await Transporteur.findOne({
        where:{
            id:response.id
        },
        include: transporteurController.includeTransporteur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 transporteurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Transporteur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: transporteurController.includeTransporteur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 transporteurController.update = async (req, res) => {
        try {
            const response = await Transporteur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const transporteur = await Transporteur.findOne({
                where: { id: req.params.id },
                include: transporteurController.includeTransporteur
            })
            res.status(200).send(transporteur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 transporteurController.delete = async (req, res) => {
        try {
            const response = await Transporteur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Transporteur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 transporteurController.getById = async (req, res) => {
        try {
            const response = await Transporteur.findOne({
                where: { id: req.params.id },
                include: transporteurController.includeTransporteur
            })
            if (response == null) {
                res.status(404).send('Transporteur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 transporteurController.getBy = async (req, res) => {
        try {
          const  response = await Transporteur.findAndCountAll({
                where: req.body,
                include: transporteurController.includeTransporteur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = transporteurController
