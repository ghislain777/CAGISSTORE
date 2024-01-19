// Génération du fichier model depuis une base de données
var fs = require("fs")

//** debut du parametrage */
const {
    Commune
} = require('../../models')
const getContenufichierModel = require('./fichier_model')


let latable = "commune"
const tab = Commune.rawAttributes
let table = {
    nom: "commune",
    model: latable.replace(/^./, latable[0].toUpperCase()),
    champs: [],
    champMediaExiste: true
}


// ********fin du parametrage ****************//

const exportation = {
    route: true,
    controller: true,
}

String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// construction du tableau des champs de la table
const colones = Object.keys(tab)
//console.log(tab)
colones.forEach((colone) => {
    const commentaire = typeof tab[colone].comment === "undefined" ? colone : tab[colone].comment;
    let champ = {
        nom: colone,
        titre: "",
        type: "",
        estCle: false,
        reference: "",
        estClepPrimaire: colone == "id" ? true : false
    }
    //console.log(tab[colone])
    switch (tab[colone].type.key) {

        case "INTEGER":
            if (tab[colone].references != undefined) {

                // c'est une cle etrangere
                champ.titre = tab[colone].references.model
                champ.type = "ENTIER"
                champ.estCle = true
                champ.reference = tab[colone].references.model
                // console.log(tab[colone].references.model)
            } else {
                // c'est un champs entier normal
                champ.titre = commentaire
                champ.type = "ENTIER"
                champ.estCle = false
            }
            break;

        case "BOOLEAN":
            champ.titre = commentaire
            champ.type = "BOOLEEN"

            break;

        case "DATE":
            champ.titre = commentaire
            champ.type = "DATEHEURE"
            break;

        default:
            champ.titre = commentaire
            champ.type = "TEXTE"

            break;
    }
    table.champs.push(champ)
})

let contenuModel = getContenufichierModel(table)

const fichierModel = `../../models/${table.nom}.js`
const repertoireModel = `../../models`

fs.mkdirSync(repertoireModel, {
    recursive: true
})
fs.writeFile(fichierModel, contenuModel, function (err) {
    if (err) throw err;
    // console.log(`fichier ${fichierController} enregistré avec succèès`)
})

console.log(`ok`)