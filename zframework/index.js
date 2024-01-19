
const getContenuFichierModel = require('./fichierModel')
const getContenuFichierController = require('./fichierController')
const getContenuColones = require('./fichierColones')
var fs = require("fs")
const getContenuView = require('./fichierVue')
const getContenuFormulaire = require('./fichierFormulaire')
const getContenuFichierControllerPourImage = require('./fichierControllerPourImage')
const getContenuFichierViewPourImage = require('./fichierViewPourImage')
const getContenuFichierEditionPourImage = require('./fichierEditionPourImage')
const getContenuFichierFormulaireImage = require('./fichierFormulaireImage')
const getContenuFichierFormulairePourImage = require('./fichierFormulairePourImage')

//** debut du parametrage */
const { Adresse } = require('../models')
let latable = "adresse"
const champImageExiste = false

let lien = {
    menu:"ventes",
    activite: "adresses"
}
const boutonNouveau = "Nouveau"
let page = {
    titreListe: "Adresses cleints",
    titreFormulaireAjout: boutonNouveau,
    titreFormulaireMisajour: "Mise à jour",
    boutonNouveau: boutonNouveau,
    boutonMisajour: "Mise à jour"
}
//** fin du parametrage */

const tab = Adresse.rawAttributes
let table = {
    nom: latable,
    model: latable.replace(/^./, latable[0].toUpperCase()),
    champs: [],
    champImageExiste: champImageExiste
}
let champsPhotos = []
let champsDocuments = []
let champsStatuts = ["statut", 'typedemouvement']



// ********fin du parametrage ****************//
const reactPath = "../../frontend"


const exportation = {
    model: true,
    vue: true,
    controller: true,
    table: true,
    class: true
}

String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

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
let contenuColones = getContenuColones(table)
let contenuFormulaire = getContenuFormulaire(table, page)
let contenuModel = getContenuFichierModel(table)
let contenuView = getContenuView(table, page)
let contenuController = getContenuFichierController(table,page,champsPhotos, champsDocuments,champsStatuts)
    ///--- fin de la generation du contenu de controller,

const fichierFormulaire = `${reactPath}/src/app/modules/${table.nom}/view/formulaire_${table.nom}.jsx`
const repertoireFormulaire= `${reactPath}/src/app/modules/${table.nom}/view`

const fichierView = `${reactPath}/src/app/modules/${table.nom}/view/view_${table.nom}.jsx`
const repertoireView= `${reactPath}/src/app/modules/${table.nom}/view`

const fichierColones = `${reactPath}/src/app/modules/${table.nom}/view/collones_${table.nom}.js`
const repertoireColones= `${reactPath}/src/app/modules/${table.nom}/view`

const fichierModel = `${reactPath}/src/app/modules/${table.nom}/model/${table.nom}_model.js`
const repertoireModel = `${reactPath}/src/app/modules/${table.nom}/model`

const fichierController = `${reactPath}/src/app/modules/${table.nom}/controller/controller_${table.nom}.jsx`
const repertoireController = `${reactPath}/src/app/modules/${table.nom}/controller`

//**fichiers à creer lorsque le champs image existe */
// controllerPourImage

const fichierControllerPourImage = `${reactPath}/src/app/modules/${table.nom}/controller/controller_${table.nom}.jsx`
const repertoireControllerPourImage = `${reactPath}/src/app/modules/${table.nom}/controller`


const fichierViewPourImage = `${reactPath}/src/app/modules/${table.nom}/view/view_${table.nom}.jsx`
const repertoireViewPourImage= `${reactPath}/src/app/modules/${table.nom}/view`


const fichierEditionPourImage = `${reactPath}/src/app/modules/${table.nom}/view/edition_${table.nom}.jsx`
const repertoireEditionPourImage= `${reactPath}/src/app/modules/${table.nom}/view`

const fichierFormulairePourImage = `${reactPath}/src/app/modules/${table.nom}/view/formulaire_${table.nom}.jsx`
const repertoireFormulairePourImage= `${reactPath}/src/app/modules/${table.nom}/view`


const fichierFormulaireImage = `${reactPath}/src/app/modules/${table.nom}/view/formulaire_image.jsx`
const repertoireFormulaireImage= `${reactPath}/src/app/modules/${table.nom}/view`



fs.mkdirSync(repertoireModel, { recursive: true })
fs.writeFile(fichierModel, contenuModel, function (err) {
    if (err) throw err;
   // console.log(`fichier ${fichierController} enregistré avec succèès`)
})

fs.mkdirSync(repertoireColones, { recursive: true })
fs.writeFile(fichierColones, contenuColones, function (err) {
    if (err) throw err;
   // console.log(`fichier ${fichierController} enregistré avec succèès`)
})

fs.mkdirSync(repertoireController, { recursive: true })
fs.writeFile(fichierController, contenuController, function (err) {
    if (err) throw err;
   // console.log(`fichier ${fichierController} enregistré avec succèès`)
})

// fichiers à creer lorsque le champs image existe:



if(table.champImageExiste === false) {

    fs.mkdirSync(repertoireView, { recursive: true })
    fs.writeFile(fichierView, contenuView, function (err) {
        if (err) throw err;
       // console.log(`fichier ${fichierController} enregistré avec succèès`)
    })
    
    
    fs.mkdirSync(repertoireFormulaire, { recursive: true })
    fs.writeFile(fichierFormulaire, contenuFormulaire, function (err) {
        if (err) throw err;
       // console.log(`fichier ${fichierController} enregistré avec succèès`)
    })
    
} else {

    // controller pour image
    fs.mkdirSync(repertoireControllerPourImage, { recursive: true })
    fs.writeFile(fichierControllerPourImage, getContenuFichierControllerPourImage(table), function (err) {
        if (err) throw err;
    })

    //view pour image
    fs.mkdirSync(repertoireViewPourImage, { recursive: true })
    fs.writeFile(fichierViewPourImage, getContenuFichierViewPourImage(table), function (err) {
        if (err) throw err;
    })
    //Edition pour image
    fs.mkdirSync(repertoireEditionPourImage, { recursive: true })
    fs.writeFile(fichierEditionPourImage, getContenuFichierEditionPourImage(table), function (err) {
        if (err) throw err;
    })

    // formulaire pour image
    fs.mkdirSync(repertoireFormulairePourImage, { recursive: true })
    fs.writeFile(fichierFormulairePourImage, getContenuFichierFormulairePourImage(table), function (err) {
        if (err) throw err;
    })

    // formulaire image
    fs.mkdirSync(repertoireFormulaireImage, { recursive: true })
    fs.writeFile(fichierFormulaireImage, getContenuFichierFormulaireImage(table), function (err) {
        if (err) throw err;
    })

}


console.log(`
{
    path: '/${lien.menu}/${lien.activite}',
    component: React.lazy(() => import('../modules/${table.nom}/controller/controller_${table.nom}')),
  },
`)

