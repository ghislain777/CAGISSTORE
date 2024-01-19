
const adresseRoutes = require('express').Router();
const adresseController = require('../controllers/adresse_controller');
adresseRoutes.get('/', async (req, res) =>  adresseController.getAll(req, res))
adresseRoutes.post('/', async (req, res) =>  adresseController.add(req, res))
adresseRoutes.put('/:id', async (req, res) =>  adresseController.update(req, res))
adresseRoutes.delete('/:id', async (req, res) =>  adresseController.delete(req, res))
adresseRoutes.get('/:id', async (req, res) =>  adresseController.getById(req, res))
adresseRoutes.post('/getby', async (req, res) =>  adresseController.getBy(req, res))
module.exports = adresseRoutes
