const getContenuFichierController = (table) => {
    
    let contenuFichierController = `

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  ${table.model}`
    table.champs.forEach((champ) => {
        if(champ.estCle ) {
            contenuFichierController+= `, ${champ.nom.ucfirst()}`
        }
        
        
    });
    if(table.champMediaExiste) {
        contenuFichierController+=`, Media`
    }

    contenuFichierController+=`  } = require('../models');
    const ${table.nom}Controller = {}
    
 ${table.nom}Controller.include${table.model} = [
    `
    let tableInclude = []
    table.champs.forEach(champ => {
        if(champ.estCle) {
            contenuFichierController+=`${champ.nom.ucfirst()},`
        }
    });

    if(table.champMediaExiste) {
        contenuFichierController+= `Media
        `
    }


   contenuFichierController+= `]
 ${table.nom}Controller.add = async (req, res) => {
        try {
            const response = await ${table.model}.create(req.body)
    
    const retour = await ${table.model}.findOne({
        where:{
            id:response.id
        },
        include: ${table.nom}Controller.include${table.model}
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 ${table.nom}Controller.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await ${table.model}.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: ${table.nom}Controller.include${table.model},
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 ${table.nom}Controller.update = async (req, res) => {
        try {
            const response = await ${table.model}.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const ${table.nom} = await ${table.model}.findOne({
                where: { id: req.params.id },
                include: ${table.nom}Controller.include${table.model}
            })
            res.status(200).send(${table.nom})
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 ${table.nom}Controller.delete = async (req, res) => {
        try {
            const response = await ${table.model}.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('${table.model} supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 ${table.nom}Controller.getById = async (req, res) => {
        try {
            const response = await ${table.model}.findOne({
                where: { id: req.params.id },
                include: ${table.nom}Controller.include${table.model}
            })
            if (response == null) {
                res.status(404).send('${table.model} non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 ${table.nom}Controller.getBy = async (req, res) => {
        try {
          const  response = await ${table.model}.findAndCountAll({
                where: req.body,
                include: ${table.nom}Controller.include${table.model}
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = ${table.nom}Controller
`
return contenuFichierController
  }

  module.exports = getContenuFichierController