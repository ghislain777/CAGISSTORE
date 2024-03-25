
const produitRoutes = require('express').Router();
const produitController = require('../controllers/produit_controller');
produitRoutes.get('/', async (req, res) =>  produitController.getAll(req, res))
produitRoutes.post('/', async (req, res) =>  produitController.add(req, res))
produitRoutes.put('/:id', async (req, res) =>  produitController.update(req, res))
produitRoutes.delete('/:id', async (req, res) =>  produitController.delete(req, res))
produitRoutes.get('/:id', async (req, res) =>  produitController.getById(req, res))
produitRoutes.post('/getby', async (req, res) =>  produitController.getBy(req, res))
module.exports = produitRoutes
