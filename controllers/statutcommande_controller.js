

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Statutcommande  } = require('../models');
    const statutcommandeController = {}
    
 statutcommandeController.includeStatutcommande = [
    ]
 statutcommandeController.add = async (req, res) => {
        try {
            const response = await Statutcommande.create(req.body)
    
    const retour = await Statutcommande.findOne({
        where:{
            id:response.id
        },
        include: statutcommandeController.includeStatutcommande
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 statutcommandeController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Statutcommande.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: statutcommandeController.includeStatutcommande,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 statutcommandeController.update = async (req, res) => {
        try {
            const response = await Statutcommande.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const statutcommande = await Statutcommande.findOne({
                where: { id: req.params.id },
                include: statutcommandeController.includeStatutcommande
            })
            res.status(200).send(statutcommande)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 statutcommandeController.delete = async (req, res) => {
        try {
            const response = await Statutcommande.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Statutcommande supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 statutcommandeController.getById = async (req, res) => {
        try {
            const response = await Statutcommande.findOne({
                where: { id: req.params.id },
                include: statutcommandeController.includeStatutcommande
            })
            if (response == null) {
                res.status(404).send('Statutcommande non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 statutcommandeController.getBy = async (req, res) => {
        try {
          const  response = await Statutcommande.findAndCountAll({
                where: req.body,
                include: statutcommandeController.includeStatutcommande
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = statutcommandeController
