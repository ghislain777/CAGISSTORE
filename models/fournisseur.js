'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Fournisseur extends Model {

        static associate(models) {


        }
    }
    Fournisseur.init({
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
            allowNull: true,
            defaultValue: "",
            comment: "Téléphone"
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Adresse"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Email"
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
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Fournisseur',
        tableName: "fournisseur",
        freezeTableName: true,
        timestamps: false
    });
    return Fournisseur;
};