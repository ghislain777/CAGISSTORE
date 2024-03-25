
const moyendepayementRoutes = require('express').Router();
const moyendepayementController = require('../controllers/moyendepayement_controller');
moyendepayementRoutes.get('/', async (req, res) =>  moyendepayementController.getAll(req, res))
moyendepayementRoutes.post('/', async (req, res) =>  moyendepayementController.add(req, res))
moyendepayementRoutes.put('/:id', async (req, res) =>  moyendepayementController.update(req, res))
moyendepayementRoutes.delete('/:id', async (req, res) =>  moyendepayementController.delete(req, res))
moyendepayementRoutes.get('/:id', async (req, res) =>  moyendepayementController.getById(req, res))
moyendepayementRoutes.post('/getby', async (req, res) =>  moyendepayementController.getBy(req, res))
module.exports = moyendepayementRoutes
