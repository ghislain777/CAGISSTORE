'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
   
    static associate(models) {
     Role.hasMany(models.Utilisateur, {foreignKey:{ name:"role", field:"role", allowNull:true}})
     Role.hasMany(models.Privilege, {foreignKey:{ name:"role", field:"role", allowNull:true}})
     
    }
  }
  Role.init({
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
      allowNull:false,
      comment:'Description'
    },
  }, {
    sequelize,
    modelName: 'Role',
    tableName:"role",
    freezeTableName:true,
    timestamps:false
  });
  return Role;
};