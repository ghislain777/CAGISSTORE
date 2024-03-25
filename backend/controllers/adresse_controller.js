

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Adresse, Client, Quartier  } = require('../models');
    const adresseController = {}
    
 adresseController.includeAdresse = [
    Client,Quartier,]
 adresseController.add = async (req, res) => {
        try {
            const response = await Adresse.create(req.body)
    
    const retour = await Adresse.findOne({
        where:{
            id:response.id
        },
        include: adresseController.includeAdresse
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 adresseController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Adresse.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: adresseController.includeAdresse,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 adresseController.update = async (req, res) => {
        try {
            const response = await Adresse.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const adresse = await Adresse.findOne({
                where: { id: req.params.id },
                include: adresseController.includeAdresse
            })
            res.status(200).send(adresse)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 adresseController.delete = async (req, res) => {
        try {
            const response = await Adresse.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Adresse supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 adresseController.getById = async (req, res) => {
        try {
            const response = await Adresse.findOne({
                where: { id: req.params.id },
                include: adresseController.includeAdresse
            })
            if (response == null) {
                res.status(404).send('Adresse non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 adresseController.getBy = async (req, res) => {
        try {
          const  response = await Adresse.findAndCountAll({
                where: req.body,
                include: adresseController.includeAdresse
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = adresseController
