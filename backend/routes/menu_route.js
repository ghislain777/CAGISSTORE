const menuRoutes = require("express").Router();
const Menu = require("../models/menu").Menu
const menuController = require("../controllers/menu_controller");

menuRoutes.get('/', async (req, res) =>  menuController.getAll(req, res))
menuRoutes.post('/', async (req, res) =>  menuController.add(req, res))
menuRoutes.put('/:id', async (req, res) =>  menuController.update(req, res))
menuRoutes.delete('/:id', async (req, res) =>  menuController.delete(req, res))
menuRoutes.get('/:id', async (req, res) =>  menuController.getById(req, res))
menuRoutes.post('/getby', async (req, res) =>  menuController.getBy(req, res))

module.exports = menuRoutes
