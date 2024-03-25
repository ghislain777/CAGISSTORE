'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Menu, {foreignKey:{ name:"menu", field:"menu", allowNull:false}});
      Activite.hasMany(models.Privilege, {foreignKey:{ name:"activite", field:"activite", allowNull:true}})
      
    }
  }
  Activite.init({

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
    chemain: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "Chemain"
    },
    icone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "Icone"
    },
    position: {
          type:DataTypes.INTEGER,
          allowNull:true,
          defaultValue: 1,
          comment: "Position"
        },

  }, {
    sequelize,
    modelName: 'Activite',
    tableName: 'activite',
    timestamps:false
  });
  return Activite;
};