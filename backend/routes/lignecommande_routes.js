
const lignecommandeRoutes = require('express').Router();
const lignecommandeController = require('../controllers/lignecommande_controller');
lignecommandeRoutes.get('/', async (req, res) =>  lignecommandeController.getAll(req, res))
lignecommandeRoutes.post('/', async (req, res) =>  lignecommandeController.add(req, res))
lignecommandeRoutes.put('/:id', async (req, res) =>  lignecommandeController.update(req, res))
lignecommandeRoutes.delete('/:id', async (req, res) =>  lignecommandeController.delete(req, res))
lignecommandeRoutes.get('/:id', async (req, res) =>  lignecommandeController.getById(req, res))
lignecommandeRoutes.post('/getby', async (req, res) =>  lignecommandeController.getBy(req, res))
module.exports = lignecommandeRoutes
