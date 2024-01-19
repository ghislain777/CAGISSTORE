
const clientRoutes = require('express').Router();
const clientController = require('../controllers/client_controller');
clientRoutes.get('/', async (req, res) =>  clientController.getAll(req, res))
clientRoutes.post('/', async (req, res) =>  clientController.add(req, res))
clientRoutes.put('/:id', async (req, res) =>  clientController.update(req, res))
clientRoutes.delete('/:id', async (req, res) =>  clientController.delete(req, res))
clientRoutes.get('/:id', async (req, res) =>  clientController.getById(req, res))
clientRoutes.post('/getby', async (req, res) =>  clientController.getBy(req, res))
module.exports = clientRoutes
