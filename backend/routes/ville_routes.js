
const villeRoutes = require('express').Router();
const villeController = require('../controllers/ville_controller');
villeRoutes.get('/', async (req, res) =>  villeController.getAll(req, res))
villeRoutes.post('/', async (req, res) =>  villeController.add(req, res))
villeRoutes.put('/:id', async (req, res) =>  villeController.update(req, res))
villeRoutes.delete('/:id', async (req, res) =>  villeController.delete(req, res))
villeRoutes.get('/:id', async (req, res) =>  villeController.getById(req, res))
villeRoutes.post('/getby', async (req, res) =>  villeController.getBy(req, res))
module.exports = villeRoutes
