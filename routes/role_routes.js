const roleRoutes = require("express").Router();
const Role = require("../models/role").Role
const roleController = require("../controllers/role_controller");

roleRoutes.get('/', async (req, res) =>  roleController.getAll(req, res))
roleRoutes.post('/', async (req, res) =>  roleController.add(req, res))
roleRoutes.put('/:id', async (req, res) =>  roleController.update(req, res))
roleRoutes.delete('/:id', async (req, res) =>  roleController.delete(req, res))
roleRoutes.get('/:id', async (req, res) =>  roleController.getById(req, res))
roleRoutes.post('/getby', async (req, res) =>  roleController.getBy(req, res))

module.exports = roleRoutes
