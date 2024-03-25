'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class privilege extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: { name: "role", field: "role", allowNull: true } })
      this.belongsTo(models.Activite, { foreignKey: { name: "activite", field: "activite", allowNull: true } })
      // define association here
    }
  }
  privilege.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        comment: "Description"
      },

      actif: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "Actif?"
      },

    },

    {
      sequelize,
      modelName: 'Privilege',
      tableName:"privilege",
      freezeTableName:true,
      timestamps:false
    });
  return privilege;
};