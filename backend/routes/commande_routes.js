
const commandeRoutes = require('express').Router();
const commandeController = require('../controllers/commande_controller');
commandeRoutes.get('/', async (req, res) =>  commandeController.getAll(req, res))
commandeRoutes.post('/', async (req, res) =>  commandeController.add(req, res))
commandeRoutes.put('/:id', async (req, res) =>  commandeController.update(req, res))
commandeRoutes.delete('/:id', async (req, res) =>  commandeController.delete(req, res))
commandeRoutes.get('/imprimer/:id', async (req, res) =>  commandeController.imprimer(req, res))
commandeRoutes.get('/:id', async (req, res) =>  commandeController.getById(req, res))
commandeRoutes.post('/getby', async (req, res) =>  commandeController.getBy(req, res))
module.exports = commandeRoutes
