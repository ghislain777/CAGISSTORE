const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require("sequelize");
const fonctions = require('../fonctions');
const { Menu, Activite } = require("../models");

const menuController = {}
menuController.add = async (req, res) => {
    try {
        const response = await Menu.create(req.body)
        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}



menuController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)  
      try {
      //  const {  itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Menu.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                where: {
                    ...parametresRequete
               //     ...parametres,
                //    nom: {
                //        [Op.like]: '%' + parametres.nom + '%'
                //    }
                },
                include:[Activite]
            
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

menuController.update = async (req, res) => {
    try {
        await Menu.update(req.body, {
            where: {
                id: req.params.id
            }
        })
       const lemenu = await Menu.findByPk(req.params.id)
        res.status(200).send(lemenu)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

menuController.delete = async (req, res) => {
    try {
        const response = await Menu.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send("Item deleted successfully")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

menuController.getById = async (req, res) => {
    try {
        const response = await Menu.findByPk(req.params.id)
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


menuController.getBy = async (req, res) => {
    try {
        response = await Menu.findAll({
            where: req.body
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = menuController

