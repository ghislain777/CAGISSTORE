
const statut commandeRoutes = require('express').Router();
const statut commandeController = require('../controllers/statut commande_controller');
statut commandeRoutes.get('/', async (req, res) =>  statut commandeController.getAll(req, res))
statut commandeRoutes.post('/', async (req, res) =>  statut commandeController.add(req, res))
statut commandeRoutes.put('/:id', async (req, res) =>  statut commandeController.update(req, res))
statut commandeRoutes.delete('/:id', async (req, res) =>  statut commandeController.delete(req, res))
statut commandeRoutes.get('/:id', async (req, res) =>  statut commandeController.getById(req, res))
statut commandeRoutes.post('/getby', async (req, res) =>  statut commandeController.getBy(req, res))
module.exports = statut commandeRoutes
