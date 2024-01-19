const { QueryTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../models');
const zfonctions = require('./zfonctions');


const repertoireModel = "../models"
const table = 'mouvementdecomptefournisseur'

//const clesEtrangeres = ['${nom}']
sequelize.query(`SHOW FULL COLUMNS FROM ${table}`, { type: QueryTypes.SELECT }).then(colones=> {
  const contenuFichierModel = zfonctions.getContenuFichierModel(colones, table)
  zfonctions.creerFichier(repertoireModel, `${table}.js`, contenuFichierModel)
  console.log(`creation du model ${table} ok`)
  return
})





