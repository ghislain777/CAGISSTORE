
const parametreRoutes = require('express').Router();
const Parametre = require('../models/parametre').Parametre
const parametreController = require('../controllers/parametre_controller');
parametreRoutes.get('/', async (req, res) =>  parametreController.getAll(req, res))
parametreRoutes.post('/', async (req, res) =>  parametreController.add(req, res))
parametreRoutes.put('/:id', async (req, res) =>  parametreController.update(req, res))
parametreRoutes.delete('/:id', async (req, res) =>  parametreController.delete(req, res))
parametreRoutes.get('/:id', async (req, res) =>  parametreController.getById(req, res))
parametreRoutes.post('/getby', async (req, res) =>  parametreController.getBy(req, res))
module.exports = parametreRoutes
