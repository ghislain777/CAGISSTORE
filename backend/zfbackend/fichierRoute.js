const getContenuFichierRoute = (table) => {
let contenuFichierRoute = ``
contenuFichierRoute+= `
const ${table.nom}Routes = require('express').Router();
const ${table.nom}Controller = require('../controllers/${table.nom}_controller');
${table.nom}Routes.get('/', async (req, res) =>  ${table.nom}Controller.getAll(req, res))
${table.nom}Routes.post('/', async (req, res) =>  ${table.nom}Controller.add(req, res))
${table.nom}Routes.put('/:id', async (req, res) =>  ${table.nom}Controller.update(req, res))
${table.nom}Routes.delete('/:id', async (req, res) =>  ${table.nom}Controller.delete(req, res))
${table.nom}Routes.get('/:id', async (req, res) =>  ${table.nom}Controller.getById(req, res))
${table.nom}Routes.post('/getby', async (req, res) =>  ${table.nom}Controller.getBy(req, res))
module.exports = ${table.nom}Routes
`
return contenuFichierRoute
  }

  module.exports = getContenuFichierRoute