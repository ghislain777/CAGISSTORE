'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Panier extends Model {

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

        }
    }
    Panier.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        montantttc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
            comment: "Montant TTC"
        },
        montantht: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
            comment: "Montant HT"
        },
        montanttaxe: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
            comment: "Montant Taxe"
        },
        totalproduits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
            comment: "Total produits"
        },
        remise: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: "Remise"
        },
        session: {
              type:DataTypes.STRING,
              allowNull:true,
              defaultValue: "",
              comment: "Session"
            },
        
    }, {
        sequelize,
        modelName: 'Panier',
        tableName: "panier",
        freezeTableName: true,
        timestamps: false
    });
    return Panier;
};