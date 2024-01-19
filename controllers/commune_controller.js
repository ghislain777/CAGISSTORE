
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Commune, Ville } = require('../models');
const communeController = {}

communeController.includeCommune = [
    Ville
]


communeController.add = async (req, res) => {
    try {
        const response = await Commune.create(req.body)

const retour = await Commune.findOne({
    where:{
        id:response.id
    },
    include:communeController.includeCommune
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

communeController.getAll = async (req, res) => {
    let  itemsPerPage = 30;
    let page =1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Commune.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: communeController.includeCommune,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

communeController.update = async (req, res) => {
    try {
        const response = await Commune.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const commune = Commune.findOne({
            where: { id: req.params.id },
            include: communeController.includeCommune
        })
        res.status(200).send(commune)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

communeController.delete = async (req, res) => {
    try {
        const response = await Commune.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Commune supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

communeController.getById = async (req, res) => {
    try {
        const response = await Commune.findOne({
            where: { id: request.params.id },
            include: communeController.includeCommune
        })
        if (response == null) {
            res.status(404).send('Commune non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


communeController.getBy = async (req, res) => {
    try {
      const  response = await Commune.findAndCountAll({
            where: req.body,
            include:communeController.includeCommune
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = communeController

