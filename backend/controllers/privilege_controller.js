const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require("sequelize");
const fonctions = require('../fonctions');
const { Privilege, Role, Activite } = require("../models");

const privilegeController = {}
privilegeController.add = async (req, res) => {
    try {
        const response = await Privilege.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}



privilegeController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)

console.warn(JSON.stringify(parametresRequete))
    try {
   //     const {  itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Privilege.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                where: {
                 ...parametresRequete
                // ...parametres,
                //    nom: {
                //        [Op.like]: '%' + parametres.nom + '%'
                //    }
                },
                include:[Role, Activite]
            
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

privilegeController.update = async (req, res) => {
    try {
        const response = await Privilege.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

privilegeController.delete = async (req, res) => {
    try {
        const response = await Privilege.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send("Item deleted successfully")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

privilegeController.getById = async (req, res) => {
    try {
        const response = await Privilege.findByPk(req.params.id)
        if (response == null) {
            res.status(402).send("Item not found")
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


privilegeController.getBy = async (req, res) => {
    try {
        response = await Privilege.findAll({
            where: req.body
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = privilegeController

