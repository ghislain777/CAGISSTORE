
const statutcommandeRoutes = require('express').Router();
const statutcommandeController = require('../controllers/statutcommande_controller');
statutcommandeRoutes.get('/', async (req, res) =>  statutcommandeController.getAll(req, res))
statutcommandeRoutes.post('/', async (req, res) =>  statutcommandeController.add(req, res))
statutcommandeRoutes.put('/:id', async (req, res) =>  statutcommandeController.update(req, res))
statutcommandeRoutes.delete('/:id', async (req, res) =>  statutcommandeController.delete(req, res))
statutcommandeRoutes.get('/:id', async (req, res) =>  statutcommandeController.getById(req, res))
statutcommandeRoutes.post('/getby', async (req, res) =>  statutcommandeController.getBy(req, res))
module.exports = statutcommandeRoutes
