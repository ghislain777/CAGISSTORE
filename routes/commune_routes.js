
const communeRoutes = require('express').Router();
const Commune = require('../models/commune').Commune
const communeController = require('../controllers/commune_controller');
communeRoutes.get('/', async (req, res) =>  communeController.getAll(req, res))
communeRoutes.post('/', async (req, res) =>  communeController.add(req, res))
communeRoutes.put('/:id', async (req, res) =>  communeController.update(req, res))
communeRoutes.delete('/:id', async (req, res) =>  communeController.delete(req, res))
communeRoutes.get('/:id', async (req, res) =>  communeController.getById(req, res))
communeRoutes.post('/getby', async (req, res) =>  communeController.getBy(req, res))
module.exports = communeRoutes
