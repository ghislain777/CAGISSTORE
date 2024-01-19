'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorie extends Model {

    static associate(models) {


    }
  }
  Categorie.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "ID"
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nom"
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      comment: "Actif?"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: 'Description'
    },
  }, {
    sequelize,
    modelName: 'Categorie',
    tableName: "categorie",
    freezeTableName: true,
    timestamps: false
  });
  return Categorie;
};