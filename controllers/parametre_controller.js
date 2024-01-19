
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Parametre } = require('../models');

const parametreController = {}
parametreController.add = async (req, res) => {
    try {
        const response = await Parametre.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}

parametreController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        //const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Parametre.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                where: {
                    ...parametresRequete
                 //   ...parametres,
                    //    nom: {
                    //        [Op.like]: '%' + parametres.nom + '%'
                    //    }
                },
               // include: [Menu]
                include:[{all:true}]

            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

parametreController.update = async (req, res) => {
    try {
        const response = await Parametre.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

parametreController.delete = async (req, res) => {
    try {
        const response = await Parametre.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Item deleted successfully')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

parametreController.getById = async (req, res) => {
    try {
        const response = await Parametre.findByPk(req.params.id)
        if (response == null) {
            res.status(402).send('Item not found')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}

parametreController.getBy = async (req, res) => {
    try {
      const  response = await Parametre.findAll({
            where: req.body,
            include:[{all:true}]
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

parametreController.getValeur = async (param) => {
    try {
      const  response = await Parametre.findOne({
            where: {nom:param},
        })
        console.log(response)
        return response.valeur
    } catch (err) {
        return null
    }
}
module.exports = parametreController

