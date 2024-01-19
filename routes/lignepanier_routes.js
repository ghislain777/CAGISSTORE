
const lignepanierRoutes = require('express').Router();
const lignepanierController = require('../controllers/lignepanier_controller');
lignepanierRoutes.get('/', async (req, res) =>  lignepanierController.getAll(req, res))
lignepanierRoutes.post('/', async (req, res) =>  lignepanierController.add(req, res))
lignepanierRoutes.put('/:id', async (req, res) =>  lignepanierController.update(req, res))
lignepanierRoutes.delete('/:id', async (req, res) =>  lignepanierController.delete(req, res))
lignepanierRoutes.get('/:id', async (req, res) =>  lignepanierController.getById(req, res))
lignepanierRoutes.post('/getby', async (req, res) =>  lignepanierController.getBy(req, res))
module.exports = lignepanierRoutes
