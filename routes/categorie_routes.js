
const categorieRoutes = require('express').Router();
const categorieController = require('../controllers/categorie_controller');
categorieRoutes.get('/', async (req, res) =>  categorieController.getAll(req, res))
categorieRoutes.post('/', async (req, res) =>  categorieController.add(req, res))
categorieRoutes.put('/:id', async (req, res) =>  categorieController.update(req, res))
categorieRoutes.delete('/:id', async (req, res) =>  categorieController.delete(req, res))
categorieRoutes.get('/:id', async (req, res) =>  categorieController.getById(req, res))
categorieRoutes.post('/getby', async (req, res) =>  categorieController.getBy(req, res))
module.exports = categorieRoutes
