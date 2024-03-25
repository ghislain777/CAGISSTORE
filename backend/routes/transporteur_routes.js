
const transporteurRoutes = require('express').Router();
const transporteurController = require('../controllers/transporteur_controller');
transporteurRoutes.get('/', async (req, res) =>  transporteurController.getAll(req, res))
transporteurRoutes.post('/', async (req, res) =>  transporteurController.add(req, res))
transporteurRoutes.put('/:id', async (req, res) =>  transporteurController.update(req, res))
transporteurRoutes.delete('/:id', async (req, res) =>  transporteurController.delete(req, res))
transporteurRoutes.get('/:id', async (req, res) =>  transporteurController.getById(req, res))
transporteurRoutes.post('/getby', async (req, res) =>  transporteurController.getBy(req, res))
module.exports = transporteurRoutes
