'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Media extends Model {

        static associate(models) {
            this.belongsTo(models.Utilisateur, {
                foreignKey: {
                    name: 'utilisateur',
                    field: "utilisateur",
                    allowNull: true
                }
            })
            models.Utilisateur.hasMany(this, {
                foreignKey: {
                    name: "utilisateur",
                    field: "utilisateur",
                    allowNull: true
                }
            })
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
            // transporteur

            this.belongsTo(models.Transporteur, {
                foreignKey: {
                    name: 'transporteur',
                    field: "transporteur",
                    allowNull: true
                }
            })
            models.Transporteur.hasMany(this, {
                foreignKey: {
                    name: "transporteur",
                    field: "transporteur",
                    allowNull: true
                }
            })

            // moyendepayement
            this.belongsTo(models.Moyendepayement, {
                foreignKey: {
                    name: 'moyendepayement',
                    field: "moyendepayement",
                    allowNull: true
                }
            })
            models.Moyendepayement.hasMany(this, {
                foreignKey: {
                    name: "moyendepayement",
                    field: "moyendepayement",
                    allowNull: true
                }
            })

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
    Media.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Nom",
            defaultValue: ""
        },
        modele: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
            comment: 'Modele'
        },
        champ: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "photo",
            comment: 'Collone'
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "image",
            comment: 'type de media'
        },
        fichier: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "fichier"
        },
    }, {
        sequelize,
        modelName: 'Media',
        tableName: "media",
        freezeTableName: true,
        timestamps: false
    });
    return Media;
};