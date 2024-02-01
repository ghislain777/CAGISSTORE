'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Adresse extends Model {

        static associate(models) {
            // client
            this.belongsTo(models.Client, {
                foreignKey: {
                    name: 'client',
                    field: "client",
                    allowNull: true
                }
            })
            models.Client.hasMany(this, {
                foreignKey: {
                    name: "client",
                    field: "client",
                    allowNull: true
                }
            })

            // quartier
            this.belongsTo(models.Quartier, {
                foreignKey: {
                    name: 'quartier',
                    field: "quartier",
                    allowNull: true
                }
            })
            models.Quartier.hasMany(this, {
                foreignKey: {
                    name: "quartier",
                    field: "quartier",
                    allowNull: true
                }
            })

        }
    }
    Adresse.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Alias de l'adresse"
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Nom"
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Prénom"
        },

        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Téléphone"
        },
        Adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Adresse"
        },
        pardefaut: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "Adresse par défaut?"
        },

    }, {
        sequelize,
        modelName: 'Adresse',
        tableName: "adresse",
        freezeTableName: true,
        timestamps: false
    });
    return Adresse;
};