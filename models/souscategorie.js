'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Souscategorie extends Model {

        static associate(models) {
            // categorie
            this.belongsTo(models.Categorie, {
                foreignKey: {
                    name: 'categorie',
                    field: "categorie",
                    allowNull: true
                }
            })
            models.Categorie.hasMany(this, {
                foreignKey: {
                    name: "categorie",
                    field: "categorie",
                    allowNull: true
                }
            })


        }
    }
    Souscategorie.init({
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
              allowNull:true,
              defaultValue: true,
              comment: "Actif?"
            },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Souscategorie',
        tableName: "souscategorie",
        freezeTableName: true,
        timestamps: false
    });
    return Souscategorie;
};