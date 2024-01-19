const activiteRoutes = require("express").Router();
const Activite = require("../models/activite").Activite
const activiteController = require("../controllers/activite_controller");
activiteRoutes.get('/', async (req, res) =>  activiteController.getAll(req, res))
activiteRoutes.post('/', async (req, res) =>  activiteController.add(req, res))
activiteRoutes.put('/:id', async (req, res) =>  activiteController.update(req, res))
activiteRoutes.delete('/:id', async (req, res) =>  activiteController.delete(req, res))
activiteRoutes.get('/:id', async (req, res) =>  activiteController.getById(req, res))
activiteRoutes.post('/getby', async (req, res) =>  activiteController.getBy(req, res))

module.exports = activiteRoutes
