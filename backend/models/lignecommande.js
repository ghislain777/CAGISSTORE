'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Lignecommande extends Model {

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
            // commande
            this.belongsTo(models.Commande, {
                foreignKey: {
                    name: 'commande',
                    field: "commande",
                    allowNull: true
                }
            })
            models.Commande.hasMany(this, {
                foreignKey: {
                    name: "commande",
                    field: "commande",
                    allowNull: true
                }
            })

        }
    }
    Lignecommande.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        prixunitaire: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:1,
            comment: "Prix unitaire"
        },
        quantite: {
              type:DataTypes.INTEGER,
              allowNull:false,
              defaultValue: 0,
              comment: "Quantité"
            },
            prixtotal: {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue: 0,
                comment: "Prix total"
              }
        
    }, {
        sequelize,
        modelName: 'Lignecommande',
        tableName: "lignecommande",
        freezeTableName: true,
        timestamps: false
    });
    return Lignecommande;
};