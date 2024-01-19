'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pay.hasMany(models.Ville, {foreignKey:{ name:"pay", field:"pay", allowNull:false}})
    }
  }
  Pay.init({

  id: {
        type:DataTypes.INTEGER,
        autoIncrement:true, 
        primaryKey: true
      },

      nom: {
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue: "",
            comment: "Nom"
          },
          description: {
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue: "",
                comment: "Description"
              },

  }, {
    sequelize,
    modelName: 'Pay',
    tableName:'pay',
    timestamps: false
  });
  return Pay;
};