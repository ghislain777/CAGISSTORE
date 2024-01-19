const getContenufichierModel = (table) => {

    let contenu = `
    'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ${table.model} extends Model {
  
    static associate(models) {
`

    table.champs.forEach(champ => {
        if (champ.estCle) {
            contenu += `
        // Définir les associations avec d'autres modèles ici, si nécessaire
        this.belongsTo(models.${champ.nom.ucfirst()}, {
            foreignKey: {
                name: '${champ.nom}',
                field: "${champ.nom}",
                allowNull: true
            }
        })
        models.${champ.nom.ucfirst()}.hasMany(this, {
            foreignKey: {
                name: "${champ.nom}",
                field: "${champ.nom}",
                allowNull: true
            }
        })
        `
        }

    });

    contenu += `
   
    }
  }
  ${table.model}.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true, 
        primaryKey: true,
        comment: "ID"
      },  
    `

    table.champs.forEach(champ => {
        if (champ.estCle == false && champ.nom !== "id") {

            switch (champ.type) {
                case "ENTIER":
                    contenu += `
        ${champ.nom}: {
            type:DataTypes.INTEGER,
            comment: "${champ.titre}"
          },       
        `
                    break;
                case "BOOLEEN":
                    contenu += `
            ${champ.nom}: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                comment: "${champ.titre}"
              },       
            `
                    break;

                case "DATEHEURE":
                    contenu += `
            ${champ.nom}: {
                type: DataTypes.DATETIME,
                allowNull: true,
                comment: "${champ.titre}"
              },       
            `
                    break;
                case "DATE":
                    contenu += `
                ${champ.nom}: {
                    type: DataTypes.DATE,
                    allowNull: true,
                    comment: "${champ.titre}"
                  },       
                `
                    break;


                default:
                    contenu += `
        ${champ.nom}: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "${champ.titre}"
          },       
        `
                    break;
            }


        }

    });


    contenu += `
  }, {
    sequelize,
    modelName: '${table.model}',
    tableName:'${table.nom}',
    timestamps:false
  });
  return ${table.model};
};
    `
    return contenu
}
module.exports = getContenufichierModel