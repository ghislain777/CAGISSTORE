'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {

        static associate(models) {
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
    Client.init({
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
        prenom: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
            comment: "Prénom"
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Téléphone"
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
        email: {
              type:DataTypes.STRING,
              allowNull:false,
              defaultValue: "",
              comment: "Email"
            },

        motdepasse: {
              type:DataTypes.STRING,
              allowNull:false,
              defaultValue: "",
              comment: "Mot de passe"
            },

    }, {
        sequelize,
        modelName: 'Client',
        tableName: "client",
        freezeTableName: true,
        timestamps: true
    });
    return Client;
};