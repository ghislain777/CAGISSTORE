'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Moyendepayement extends Model {

        static associate(models) {


        }
    }
    Moyendepayement.init({
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
              type:DataTypes.BOOLEAN,
              allowNull:false,
              defaultValue: true,
              comment: "Actif?"
            },
            defaut: {
                  type:DataTypes.BOOLEAN,
                  allowNull:false,
                  defaultValue: false,
                  comment: "Par défaut?"
                },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Moyendepayement',
        tableName: "moyendepayement",
        freezeTableName: true,
        timestamps: false
    });
    return Moyendepayement;
};