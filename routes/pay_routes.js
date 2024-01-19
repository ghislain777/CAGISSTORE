
const payRoutes = require('express').Router();
const Pay = require('../models/pay').Pay
const payController = require('../controllers/pay_controller');
payRoutes.get('/', async (req, res) =>  payController.getAll(req, res))
payRoutes.post('/', async (req, res) =>  payController.add(req, res))
payRoutes.put('/:id', async (req, res) =>  payController.update(req, res))
payRoutes.delete('/:id', async (req, res) =>  payController.delete(req, res))
payRoutes.get('/:id', async (req, res) =>  payController.getById(req, res))
payRoutes.post('/getby', async (req, res) =>  payController.getBy(req, res))
module.exports = payRoutes
