'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Commande extends Model {

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
            // adresse
            this.belongsTo(models.Adresse, {
                foreignKey: {
                    name: 'adresse',
                    field: "adresse",
                    allowNull: true
                }
            })
            models.Adresse.hasMany(this, {
                foreignKey: {
                    name: "adresse",
                    field: "adresse",
                    allowNull: true
                }
            })

            // statutcommande
            this.belongsTo(models.Statutcommande, {
                foreignKey: {
                    name: 'statutcommande',
                    field: "statutcommande",
                    allowNull: true
                }
            })
            models.Statutcommande.hasMany(this, {
                foreignKey: {
                    name: "statutcommande",
                    field: "statutcommande",
                    allowNull: true
                }
            })



        }
    }
    Commande.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        montantttc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Montant TTC"
        },
        montanttaxe: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Montant Taxe"
        },
        montantht: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Montant HT"
        },
        remise: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Remise"
        },
        statut: {
              type:DataTypes.STRING,
              allowNull:false,
              defaultValue: "",
              comment: "Statut"
            },
        totalproduits: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
            comment: "Total produits"
        },
        montanttransport: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Montant transport"
        },
        delaisdelivraison: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Délais de livraison"
        },   
        messageduclient: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
            comment: 'Message du client'
        },

        datecommande: {
              type:DataTypes.DATE,
              allowNull:false,
              defaultValue:sequelize.literal('CURRENT_TIMESTAMP'),
              comment:'Date de la commande'
            },

        datedeconfirmation: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date de confirmation"
        },
       
        datedexpedition: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date d'expédition"
        },
        datedereception: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date de reception"
        },
        dateannulation: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date d'annulation"
        },
        datepayement: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date de payement"
        },
        datedelivraison: {
            type: DataTypes.DATE,
            allowNull: true,
            comment: "Date de livraison"
        },
        


    }, {
        sequelize,
        modelName: 'Commande',
        tableName: "commande",
        freezeTableName: true,
        timestamps: false
    });
    return Commande;
};