'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
   
    static associate(models) {
      this.belongsTo(models.Role, {foreignKey:{ name:"role", field:"role", allowNull:false}})
      
    }
  }
  Utilisateur.init({

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment:"ID"
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      comment:'Nom'
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultvalue:""
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      comment:"Téléphone"
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    motdepasse: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    photo: {
      type:DataTypes.STRING,
      allowNull:true,
      defaultValue: ""
    },
    token: {
          type:DataTypes.STRING,
          allowNull:true,
          defaultValue: ""
        },
  }, {
    sequelize,
    modelName: 'Utilisateur',
    tableName:"utilisateur",
    timestamps:false

  });
  return Utilisateur;
};