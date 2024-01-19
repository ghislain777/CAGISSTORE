const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require("sequelize");
const fonctions = require('../fonctions');
const { Role, Utilisateur, Activite, Privilege } = require("../models");

const roleController = {}
roleController.add = async (req, res) => {
    try {
        const response = await Role.create(req.body)

var listeActivites = await Activite.findAll()
console.log(listeActivites)

listeActivites.forEach(async activite => {
   await  Privilege.create({
        activite: activite.id, 
        role: response.id,
        actif:true,
        description: `privilege du role ${response.name} sur l'activite ${activite.nom}`
    })
});

        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}



roleController.getAll = async (req, res) => {
    const page = req.query.page? +req.query.page : 1
    const itemsPerPage = req.query.itemsPerPage? +req.query.itemsPerPage : 30
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)

// console.log(JSON.stringify(parametres))
    try {
    //    const {  itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Role.findAndCountAll(
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
               // include:[Utilisateur]
            
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

roleController.update = async (req, res) => {
    try {
        const response = await Role.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

roleController.delete = async (req, res) => {
    try {
        const response = await Role.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send("Item deleted successfully")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

roleController.getById = async (req, res) => {
    try {
        const response = await Role.findByPk(req.params.id)
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


roleController.getBy = async (req, res) => {
    try {
        response = await Role.findAll({
            where: req.body
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = roleController

