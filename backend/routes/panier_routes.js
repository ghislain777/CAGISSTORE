
const panierRoutes = require('express').Router();
const panierController = require('../controllers/panier_controller');
panierRoutes.get('/', async (req, res) =>  panierController.getAll(req, res))
panierRoutes.post('/', async (req, res) =>  panierController.add(req, res))
panierRoutes.put('/:id', async (req, res) =>  panierController.update(req, res))
panierRoutes.put('/fraisdelivraison/:id', async (req, res) =>  panierController.fraisdelivraison(req, res))
panierRoutes.delete('/:id', async (req, res) =>  panierController.delete(req, res))
panierRoutes.get('/:id', async (req, res) =>  panierController.getById(req, res))
panierRoutes.post('/getby', async (req, res) =>  panierController.getBy(req, res))
module.exports = panierRoutes
