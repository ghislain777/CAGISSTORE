'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parametre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parametre.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      unique: true,
      comment: "Nom du parametre"
    },
    valeur: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      comment: "Valeur"
    },
    description: {
          type:DataTypes.STRING,
          allowNull:true,
          defaultValue: "",
          comment: "Description"
        },

  }, {
    sequelize,
    modelName: 'Parametre',
    tableName: "parametre",
    timestamps:false
  });
  return Parametre;
};