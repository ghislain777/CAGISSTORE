'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lignepanier extends Model {

        static associate(models) {
            // produit
            this.belongsTo(models.Produit, {
                foreignKey: {
                    name: 'produit',
                    field: "produit",
                    allowNull: true
                }
            })
            models.Produit.hasMany(this, {
                foreignKey: {
                    name: "produit",
                    field: "produit",
                    allowNull: true
                }
            })
            // panier
            this.belongsTo(models.Panier, {
                foreignKey: {
                    name: 'panier',
                    field: "panier",
                    allowNull: true
                }
            })
            models.Panier.hasMany(this, {
                foreignKey: {
                    name: "panier",
                    field: "panier",
                    allowNull: true
                }
            })


        }
    }
    Lignepanier.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Quantité"
        },
        prixunitaire: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Prix unitaire"
        },
        prixtotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Prix total"
        },
    }, {
        sequelize,
        modelName: 'Lignepanier',
        tableName: "lignepanier",
        freezeTableName: true,
        timestamps: false
    });
    return Lignepanier;
};