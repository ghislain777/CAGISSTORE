
const souscategorieRoutes = require('express').Router();
const souscategorieController = require('../controllers/souscategorie_controller');
souscategorieRoutes.get('/', async (req, res) =>  souscategorieController.getAll(req, res))
souscategorieRoutes.post('/', async (req, res) =>  souscategorieController.add(req, res))
souscategorieRoutes.put('/:id', async (req, res) =>  souscategorieController.update(req, res))
souscategorieRoutes.delete('/:id', async (req, res) =>  souscategorieController.delete(req, res))
souscategorieRoutes.get('/:id', async (req, res) =>  souscategorieController.getById(req, res))
souscategorieRoutes.post('/getby', async (req, res) =>  souscategorieController.getBy(req, res))
module.exports = souscategorieRoutes
