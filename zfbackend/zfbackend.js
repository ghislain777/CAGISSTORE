const {
    exit
} = require('process')

const getContenuFichierRoute = require('./fichierRoute')
const getContenuFichierController = require('./fichierController')
var fs = require("fs")

//** debut du parametrage */
const {
    Ville
} = require('../models')
let latable = "ville"
const tab = Ville.rawAttributes
let table = {
    nom: latable,
    model: latable.replace(/^./, latable[0].toUpperCase()),
    champs: [],
    champMediaExiste: false
}

let champsPhotos = ["photo", "image"]
let champsDocuments = []
let champsVilles = []



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
    const commentaire = tab[colone].comment === undefined ? colone : tab[colone].comment;
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

            if (champsPhotos.includes(colone)) {
                // c'est un champs photo
                champ.type = "IMAGE"
            }

            if (champsDocuments.includes(colone)) {
                champ.type = "DOCUMENT"
            }
            if (champsVilles.includes(colone)) {
                champ.type = "STATUT"
            }

            break;
    }
    table.champs.push(champ)
})

let contenuController = getContenuFichierController(table)
let contenuRoute = getContenuFichierRoute(table)
///--- fin de la generation du contenu de controller,


const fichierController = `../controllers/${table.nom}_controller.js`
const repertoireController = `../controllers`

const fichierRoute = `../routes/${table.nom}_routes.js`
const repertoireRoutes = `../routes`

fs.mkdirSync(repertoireController, {
    recursive: true
})
fs.writeFile(fichierController, contenuController, function (err) {
    if (err) throw err;
    // console.log(`fichier ${fichierController} enregistré avec succèès`)
})

fs.mkdirSync(repertoireRoutes, {
    recursive: true
})
fs.writeFile(fichierRoute, contenuRoute, function (err) {
    if (err) throw err;
    // console.log(`fichier ${fichierController} enregistré avec succèès`)
})

console.log(`
const ${table.nom}Routes = require('./routes/${table.nom}_routes.js')
app.use('/api/${table.nom}s', ${table.nom}Routes); 

`)