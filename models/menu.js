'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.hasMany(models.Activite, {foreignKey:{ name:"menu", field:"menu", allowNull:false}})
    }
  }
  Menu.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "Nom"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "Description"
    },
    icone: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "Icone"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "Position"
    }

  }, {
    sequelize,
    modelName: 'Menu',
    tableName:"menu",
    freezeTableName:true,
    timestamps:false
    
  });
  return Menu;
};