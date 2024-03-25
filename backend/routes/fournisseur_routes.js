
const fournisseurRoutes = require('express').Router();
const fournisseurController = require('../controllers/fournisseur_controller');
fournisseurRoutes.get('/', async (req, res) =>  fournisseurController.getAll(req, res))
fournisseurRoutes.post('/', async (req, res) =>  fournisseurController.add(req, res))
fournisseurRoutes.put('/:id', async (req, res) =>  fournisseurController.update(req, res))
fournisseurRoutes.delete('/:id', async (req, res) =>  fournisseurController.delete(req, res))
fournisseurRoutes.get('/:id', async (req, res) =>  fournisseurController.getById(req, res))
fournisseurRoutes.post('/getby', async (req, res) =>  fournisseurController.getBy(req, res))
module.exports = fournisseurRoutes
