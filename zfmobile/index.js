
const { Groupedepayement } = require('../models')
var fs = require("fs")
const getContenuFichierClass = require('./fichierClass')
const getContenuFichierModel = require('./fichierModel')
const getContenuFichierFormulaire = require('./fichierFormulaire')
const getContenuFichierController = require('./fichierController')
const getContenuFichierView = require('./fichierView')

String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const tab = Groupedepayement.rawAttributes
let table = {
    nom: "groupedepayement",
    model: "Groupedepayement",
    champs: [],
    contientMedia: false
}
let champsPhotos = ["photo", "image"]
let champsDocuments = ["document", "archive"]
let champsStatuts = ["statut"]


const exportation = {
    class: true,
    controller: true,
    model: true,
    formulaire: false,
    view: false,
}

const flutterPath = "../../../lightbox/lightboxmobile"
const repertoireDeBase = `${flutterPath}/lib/app/modules`

const repertoireClass = `${repertoireDeBase}/${table.nom}/model/`
const repertoireModel = `${repertoireDeBase}/${table.nom}/model/`
const repertoireFormulaire = `${flutterPath}/lib/app/formulaires`
const repertoireController = `${repertoireDeBase}/${table.nom}/controllers/`
const repertoireView = `${repertoireDeBase}/${table.nom}/views`








// ********fin du parametrage ****************//



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
            }
            else {
                // c'est un champs entier normal
                champ.titre = commentaire
                champ.type = "ENTIER"
                champ.estCle = false
            }
            break;
            case "FLOAT":
            if (tab[colone].references != undefined) {getContenuFichierClass

                // c'est une cle etrangere
                champ.titre = tab[colone].references.model
                champ.type = "ENTIER"
                champ.estCle = true
                champ.reference = tab[colone].references.model
                // console.log(tab[colone].references.model)
            }
            else {
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
            if (champsStatuts.includes(colone)) {
                champ.type = "STATUT"
            }

            break;
    }
    table.champs.push(champ)
})
//console.log(table)

// --------- on genere les fichiers.
// console.log(getContenuFichierModel(table))

// -- FIN DE GENERATION DU CONTENU MODEL

// GENERATION DU CONTENU CONTROLLER

let contenuClass = getContenuFichierClass(table)
let contenuModel = getContenuFichierModel(table)

if (exportation.class == true) {

    const fichierClass = `${repertoireClass}/${table.nom}.dart`

    fs.mkdirSync(repertoireClass, { recursive: true })
    fs.writeFile(fichierClass, contenuClass, function (err) {
        if (err) throw err;
    })

    console.log("fichier class ok")
}

if (exportation.model == true) {

    const fichierModel = `${repertoireModel}/${table.nom}_model.dart`

    fs.mkdirSync(repertoireModel, { recursive: true })
    fs.writeFile(fichierModel, contenuModel, function (err) {
        if (err) throw err;
    })

    console.log("fichhier model ok")
}


if (exportation.formulaire == true) {
    let contenuFichierFormulaire = getContenuFichierFormulaire(table)

    const fichierFoumulaire = `${repertoireFormulaire}/formulaire_${table.nom}.dart`

    fs.mkdirSync(repertoireFormulaire, { recursive: true })
    fs.writeFile(fichierFoumulaire, contenuFichierFormulaire, function (err) {
        if (err) throw err;
    })

    console.log("fichhier formulaire ok")
}


if (exportation.controller == true) {
    let contenuFichierController = getContenuFichierController(table)

    const fichierController = `${repertoireController}/${table.nom}_controller.dart`

    fs.mkdirSync(repertoireController, { recursive: true })
    fs.writeFile(fichierController, contenuFichierController, function (err) {
        if (err) throw err;
    })

    console.log("fichier controller ok")
}


if (exportation.view == true) {
    let contenuFichierView = getContenuFichierView(table)
    const fichierView = `${repertoireView}/${table.nom}_view.dart`

    fs.mkdirSync(repertoireView, { recursive: true })
    fs.writeFile(fichierView, contenuFichierView, function (err) {
        if (err) throw err;
    })

    console.log("fichier view ok")
}




