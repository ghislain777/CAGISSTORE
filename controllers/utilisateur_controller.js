

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Utilisateur, Menu, Activite, Privilege, Media, Role} = require('../models');
        
    const utilisateurController = {}
    
 utilisateurController.includeUtilisateur = [
    
            Role,
        Media
        
]
 utilisateurController.add = async (req, res) => {
        try {
            const response = await Utilisateur.create(req.body)
    
    const retour = await Utilisateur.findOne({
        where:{
            id:response.id
        },
        include: utilisateurController.includeUtilisateur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 utilisateurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Utilisateur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: utilisateurController.includeUtilisateur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 utilisateurController.update = async (req, res) => {
        try {
            const response = await Utilisateur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const utilisateur = await Utilisateur.findOne({
                where: { id: req.params.id },
                include: utilisateurController.includeUtilisateur
            })
            res.status(200).send(utilisateur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 utilisateurController.delete = async (req, res) => {
        try {
            const response = await Utilisateur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Utilisateur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 utilisateurController.getById = async (req, res) => {
        try {
            const response = await Utilisateur.findOne({
                where: { id: req.params.id },
                include: utilisateurController.includeUtilisateur
            })
            if (response == null) {
                res.status(404).send('Utilisateur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 utilisateurController.getBy = async (req, res) => {
        try {
          const  response = await Utilisateur.findAndCountAll({
                where: req.body,
                include: utilisateurController.includeUtilisateur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    utilisateurController.login = async (req, res) => {
        try {
            if (!req.body.email) {
                res.status(402).send("Adresse email requise")
                return
            }
            if (!req.body.motdepasse) {
                res.status(402).send("le mot de passe est requis")
                return
            }
            // console.log(req.body)
            const utilisateur = await Utilisateur.findOne({
                where: {
                    email: req.body.email
                },
                include: [Role]
            })
            if (!utilisateur) {
                res.status(200).send({code: 401, message:"Adresse Email ou mot de passe incorrect"})
                return
            }
            if (utilisateur.motdepasse == req.body.motdepasse) {

                if (utilisateur.actif == false) {
                    res.status(200).send({code:403, message:"Utilisateur désactivé, veuillez contacter l'administrateur"})
                    return
                }

                // on envoi les privileges privileges/menus de l'utilisateur


                // liste des privileges de l'utilisateur
                var navigation = []
                var listeprivileges = await Privilege.findAll({
                    where: {
                        actif: true,
                        role: utilisateur.role
                    },
                    include: [{ model: Role }, { model: Activite, include: [{ model: Menu }] }]
                    //   include:[{all:true}]
                })
                //res.status(200).send({ listeprivileges })

                var listemenus = await Menu.findAll()
                console.log("liste des privileges")
                //res.status(200).send({ privileges: listeprivileges, menus: listemenus })

                //console.log(listeprivileges);
                listemenus.forEach(menu => {
                    let leMenu = {}
                    leMenu.id = menu.id
                    leMenu.name = menu.nom
                    leMenu.description = menu.description
                    leMenu.position = menu.position
                    leMenu.icon = menu.icon
                    leMenu.children = []
                    listeprivileges.forEach(privilege => {
                        // console.error(privilege)
                        if (privilege.Activite.Menu.id == leMenu.id) {
                            leMenu.children.push({
                                id: privilege.Activite.id,
                                name: privilege.Activite.nom,
                                description: privilege.Activite.description,
                                path: privilege.Activite.chemain,
                                position: privilege.Activite.position,
                                icon: privilege.Activite.icon,
                            })
                        }
                    });
                    navigation.push(leMenu)
                });
                res.status(200).send({ utilisateur: utilisateur, privileges: listeprivileges, navigation: navigation,code:200 })
            }
            else {
                res.status(200).send({code: 401, message:"Adresse Email ou mot de passe incorrect"})
            }

        }
        catch (error) {
            console.error(error)
            res.send(error.message)

        }
    }

    
    module.exports = utilisateurController
