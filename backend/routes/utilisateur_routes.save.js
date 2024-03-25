const utilisateurRoutes = require("express").Router();
const Utilisateur = require("../models/utilisateur").Utilisateur
const utilisateurController = require("../controllers/utilisateur_controller.save");

utilisateurRoutes.get('/', async (req, res) =>  utilisateurController.getAll(req, res))
utilisateurRoutes.post('/', async (req, res) =>  utilisateurController.add(req, res))
utilisateurRoutes.put('/:id', async (req, res) =>  utilisateurController.update(req, res))
utilisateurRoutes.delete('/:id', async (req, res) =>  utilisateurController.delete(req, res))
utilisateurRoutes.get('/:id', async (req, res) =>  utilisateurController.getById(req, res))
utilisateurRoutes.post('/getby', async (req, res) =>  utilisateurController.getBy(req, res))
utilisateurRoutes.post('/login', async (req, res) =>  utilisateurController.login(req, res))


module.exports = utilisateurRoutes
