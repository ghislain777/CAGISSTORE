
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Pay } = require('../models');
const payController = {}

payController.includePay = [

]


payController.add = async (req, res) => {
    try {
        const response = await Pay.create(req.body)

const retour = await Pay.findOne({
    where:{
        id:response.id
    },
    include:payController.includePay
})

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

payController.getAll = async (req, res) => {
    let  itemsPerPage = 30;
    let page =1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
       

        const resultat = await Pay.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: payController.includePay,
            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

payController.update = async (req, res) => {
    try {
        const response = await Pay.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const pay = Pay.findOne({
            where: { id: req.params.id },
            include: payController.includePay
        })
        res.status(200).send(pay)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

payController.delete = async (req, res) => {
    try {
        const response = await Pay.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Pay supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

payController.getById = async (req, res) => {
    try {
        const response = await Pay.findOne({
            where: { id: request.params.id },
            include: payController.includePay
        })
        if (response == null) {
            res.status(404).send('Pay non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


payController.getBy = async (req, res) => {
    try {
      const  response = await Pay.findAndCountAll({
            where: req.body,
            include:payController.includePay
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = payController

