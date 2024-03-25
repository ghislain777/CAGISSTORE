
const privilegeRoutes = require("express").Router();
const Privilege = require("../models/privilege").Privilege
const privilegeController = require("../controllers/privilege_controller");

privilegeRoutes.get('/', async (req, res) =>  privilegeController.getAll(req, res))
privilegeRoutes.post('/', async (req, res) =>  privilegeController.add(req, res))
privilegeRoutes.put('/:id', async (req, res) =>  privilegeController.update(req, res))
privilegeRoutes.delete('/:id', async (req, res) =>  privilegeController.delete(req, res))
privilegeRoutes.get('/:id', async (req, res) =>  privilegeController.getById(req, res))
privilegeRoutes.post('/getby', async (req, res) =>  privilegeController.getBy(req, res))

module.exports = privilegeRoutes
