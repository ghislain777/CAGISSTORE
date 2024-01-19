'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Produit extends Model {

        static associate(models) {
            // fournisseur
            this.belongsTo(models.Fournisseur, {
                foreignKey: {
                    name: 'fournisseur',
                    field: "fournisseur",
                    allowNull: true
                }
            })
            models.Fournisseur.hasMany(this, {
                foreignKey: {
                    name: "fournisseur",
                    field: "fournisseur",
                    allowNull: true
                }
            })
            // souscategorie
            this.belongsTo(models.Souscategorie, {
                foreignKey: {
                    name: 'souscategorie',
                    field: "souscategorie",
                    allowNull: true
                }
            })
            models.Souscategorie.hasMany(this, {
                foreignKey: {
                    name: "souscategorie",
                    field: "souscategorie",
                    allowNull: true
                }
            })


        }
    }
    Produit.init({
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: 'Description'
        },
        descriptionlongue: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
            comment: "Description longue"
        },
        actif: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "Actif?"
        },
        enpromo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: "En promo?"
        },
        prixdevente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: "Prix de vente"
        },
        prixpromo: {
              type:DataTypes.INTEGER,
              allowNull:false,
              defaultValue: 0,
              comment: "Prix promo"
            },
        prixdachat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: "Prix d'achat"
        },
    }, {
        sequelize,
        modelName: 'Produit',
        tableName: "produit",
        freezeTableName: true,
        timestamps: false
    });
    return Produit;
};