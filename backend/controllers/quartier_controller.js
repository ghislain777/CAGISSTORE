
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Quartier, Commune } = require('../models');
const quartierController = {}

quartierController.includeQuartier = [
    Commune

]


quartierController.add = async (req, res) => {
    try {
        const response = await Quartier.create(req.body)

const retour = await Quartier.findOne({
    where:{
        id:response.id
    },
    include:quartierController.includeQuartier
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

quartierController.getAll = async (req, res) => {
    let  itemsPerPage = 30;
    let page =1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Quartier.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: quartierController.includeQuartier,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

quartierController.update = async (req, res) => {
    try {
        const response = await Quartier.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const quartier = Quartier.findOne({
            where: { id: req.params.id },
            include: quartierController.includeQuartier
        })
        res.status(200).send(quartier)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

quartierController.delete = async (req, res) => {
    try {
        const response = await Quartier.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Quartier supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

quartierController.getById = async (req, res) => {
    try {
        const response = await Quartier.findOne({
            where: { id: request.params.id },
            include: quartierController.includeQuartier
        })
        if (response == null) {
            res.status(404).send('Quartier non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


quartierController.getBy = async (req, res) => {
    try {
      const  response = await Quartier.findAndCountAll({
            where: req.body,
            include:quartierController.includeQuartier
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = quartierController

