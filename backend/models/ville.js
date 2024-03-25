
    'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ville extends Model {
  
    static associate(models) {
        // Définir les associations avec d'autres modèles ici, si nécessaire
        this.belongsTo(models.Pay, {
            foreignKey: {
                name: 'pay',
                field: "pay",
                allowNull: true
            }
        })
        models.Pay.hasMany(this, {
            foreignKey: {
                name: "pay",
                field: "pay",
                allowNull: true
            }
        })
        
   
    }
  }
  Ville.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true, 
        primaryKey: true,
        comment: "ID"
      },  
    
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Nom"
          },  

          actif: {
                type:DataTypes.BOOLEAN,
                allowNull:false,
                defaultValue: true,
                comment: "Actif?"
              },     
        
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Description"
          },       
        
  }, {
    sequelize,
    modelName: 'Ville',
    tableName:'ville',
    timestamps:false
  });
  return Ville;
};
    