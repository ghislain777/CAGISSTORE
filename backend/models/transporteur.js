'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transporteur extends Model {

        static associate(models) {


        }
    }
    Transporteur.init({
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

        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Téléphone"
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Adresse"
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
                  comment: "Par défaut"
                },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Transporteur',
        tableName: "transporteur",
        freezeTableName: true,
        timestamps: false
    });
    return Transporteur;
};