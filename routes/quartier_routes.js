
const quartierRoutes = require('express').Router();
const Quartier = require('../models/quartier').Quartier
const quartierController = require('../controllers/quartier_controller');
quartierRoutes.get('/', async (req, res) =>  quartierController.getAll(req, res))
quartierRoutes.post('/', async (req, res) =>  quartierController.add(req, res))
quartierRoutes.put('/:id', async (req, res) =>  quartierController.update(req, res))
quartierRoutes.delete('/:id', async (req, res) =>  quartierController.delete(req, res))
quartierRoutes.get('/:id', async (req, res) =>  quartierController.getById(req, res))
quartierRoutes.post('/getby', async (req, res) =>  quartierController.getBy(req, res))
module.exports = quartierRoutes
