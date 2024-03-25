'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statutcommande extends Model {
    
    static associate(models) {
     
     
    }
  }
  Statutcommande.init({
    id: {
          type:DataTypes.INTEGER,
          autoIncrement:true, 
          primaryKey: true,
          comment:"ID"
        },
    nom: {
      type:DataTypes.STRING,
      allowNull:false,
      comment:"Nom"
    },
    description: {
      type:DataTypes.STRING,
      allowNull:true,
      comment:'Description'
    },
  }, {
    sequelize,
    modelName: 'Statutcommande',
    tableName:"statutcommande",
    freezeTableName:true,
    timestamps:false
  });
  return Statutcommande;
};