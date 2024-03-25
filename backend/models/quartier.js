'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Quartier extends Model {
        static associate(models) {
            Quartier.belongsTo(models.Commune, {
                foreignKey: { name: 'commune', allowNull: true }
            })
            models.Commune.hasMany(Quartier, {
                foreignKey: { name: "commune", field: "commune", allowNull: true }
            })
        }
    }

    Quartier.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'ID'
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: 'Nom'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        }
    }, {
        sequelize,
        modelName: 'Quartier',
        tableName: 'quartier',
        freezeTableName: true,
        timestamps: false
    });

    return Quartier;
};
