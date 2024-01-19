
const {
  format
} = require("date-fns");
const fonctionsCommande = {}
const fonctionsDocument = require("../fonctions_document")
const { NumberToLetter } = require("convertir-nombre-lettre");


fonctionsCommande.genererDetailscommande = (doc, commande, entreprise) => {

    let lignes = commande.Lignecommandes.map((ligne) => {
        const optiongarantie = ligne.Optiongarantie
        if(entreprise.afficherPhotos === false) {
          return [
            "",
            optiongarantie.obligatoire? "OBLIGATOIRE" : "OPTIONNEL",
            optiongarantie.Garantie.nom,
            ligne.montant.toLocaleString("ca-CA"),
          ]
        }
        else {
          return [
            "",
            optiongarantie.obligatoire? "OBLIGATOIRE" : "OPTIONNEL",
            optiongarantie.Garantie.nom,
            ligne.montant.toLocaleString("ca-CA"),
          ]
        }
        //return row
      })
    
      var headers = [
        {
          label: entreprise.afficherPhotos === true?  "Photo" : "",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
            const {
              x,
              y,
              width,
              height
            } = rectCell;
            if(value.length > 0) {
              doc.image(`public${value[0].fichier}`, x, y, {
              height:height
            });
          }
            return null;
          }
        },
        {
          label: "Remarque",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "right"
        },
        {
          label: "Garantie" ,
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center",
          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => {
            const {
              x,
              y,
              width,
              height
            } = rectCell;
            return value
          }
    
        },
        {
          label: "Montant",
          headerColor:entreprise.couleur,
          headerOpacity:1,
          valign: "center",
          align: "right",

        },
        
        
      ]
      if(entreprise.afficherPhotos === false) {
        //headers.splice(0, 1);
      }
    
      const latable = {
        // columnsSize: [ 200, 100, 100 ],
        headers: headers,
        rows: lignes,
        headerColor: entreprise.couleur,
      };
      doc.moveDown()
      doc.moveDown()
      doc
        .font("Helvetica-Bold")
        .fontSize(10)
        .text(`Catégorie du véhicule: ${commande.Categorievehicule.numero} (${commande.Categorievehicule.nom})`, 30, 250)
      doc.moveDown()
      doc.table(latable, {
        columnsSize:  entreprise.afficherPhotos == true? [50, 250, 150, 100] : [0, 100, 325, 120]  ,
        //headerColor: entreprise.couleur,
        headerOpacity: 1,
        width: 530,
        padding: 5,
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10).fillColor("#FFFFFF"),
        //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow) => {
          doc.font("Helvetica").fontSize(10).fillColor("#444444")
    
        },
      });
    
      const tabletotaux = {
    
        headers: [{
          label: "Titre",
          align: "left"
        }, {
          label: "Titre",
          align: "right",
        }],
    
        rows: [
          ["Coût de la police", commande.coutdelapolice.toLocaleString("ca-CA")],
          ["Taxe", (18/100*commande.montantttc.toFixed(2)).toLocaleString("ca-CA")],
          ["Total TTC", commande.montantttc.toLocaleString("ca-CA") + ` ${entreprise.devise}`],
        ]
      }
      doc.text('', 570 - 250)
      doc.table(tabletotaux, {
        //headerColor: "#292380",
        align: "right",
        hideHeader: true,
        headerOpacity: 0.5,
        width: 250,
        //separation:false,
        padding: 5,
        prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
        //      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => doc.font("Helvetica").fontSize(8),
        prepareRow: (row, indexColumn, indexRow, rectRow) => {
          doc.font("Helvetica-Bold").fontSize(10)
          //.text(row.montant)
    
        },
      });
    
      doc.moveDown()
       // montant en lettre
      
   doc
   .font("Helvetica").fontSize(10)
   .text( "Ce présent document arrêté au montant de: ", 30)
   .font("Helvetica-Bold").fontSize(10)
   .text(NumberToLetter(commande.montantttc) +" "+ entreprise.devise)
    doc.moveDown()
    doc.moveDown()
    doc.font("Helvetica").fontSize(10).text('Vendeur:',30)
    doc.font("Helvetica-Bold").fontSize(10).
    text(`${commande.Utilisateur?.nom?? ""} ${commande.Utilisateur?.prenom?? ""}`,30)
    doc.moveUp()
    doc.font("Helvetica").fontSize(10).
    text(`Le client:`,500)
}


fonctionsCommande.genererInfosClient = (doc, commande, entreprise) => {
  //entreprise.typedeDocument = "Commande"
  //entreprise.prefixe ="FAC"
    
  doc
  .fillColor("#444444")
  .fontSize(20)
  .text(`${entreprise.typedeDocument}# ${entreprise.prefixe}${commande.id}`, 50, 120);
   fonctionsDocument.generateHr(doc, entreprise, 145);
    const customerInformationTop = 160;

 doc
  .fontSize(10)
  .text(`Date:`, 50, customerInformationTop)
  .font("Helvetica")
  .text(`${formatDate(commande.datecommande)}`, 150, customerInformationTop)
  .font("Helvetica")
  .text("Durée:", 50, customerInformationTop + 15)
  .text(`${commande.duree} mois`, 150, customerInformationTop + 15)
  .text("Statut: ", 50, customerInformationTop + 30)
  .font("Helvetica")
  .text(
    commande.statut,
    150,
    customerInformationTop + 30
  )
  .font("Helvetica")
  .text("Date d'effet: ", 50, customerInformationTop + 43)
  .font("Helvetica-Bold")
  .text(
    formatDate(commande.dateeffet),
    150,
    customerInformationTop + 43
  )

  .font("Helvetica-Bold")
  .text(`${commande.Vehicule?.Client?.nom?? ""} ${commande.Vehicule?.Client?.prenom?? ""}`, 350, customerInformationTop)
  .font("Helvetica")
  .text(commande.Vehicule?.Client?.telephone ?? "", 350, customerInformationTop + 15)
  .text(`${commande.Vehicule?.Modele?.nom ?? ""} / ${commande.Vehicule?.Modele?.Marque?.nom ?? ""} (${commande.Vehicule?.immatriculation?? ""})\n Puissance: ${commande.Vehicule?.puissance ?? ""} CV`,350,customerInformationTop + 30
  )
  .moveDown();
  fonctionsDocument.generateHr(doc, entreprise, customerInformationTop+52);

  }


  function formatCurrency(cents) {
    return cents.toLocaleString("ca-CA") + " "+entreprise.devise;
  }
  
  function formatDate(date) {
    return date == null ? "" : format(date, "dd/MM/yyyy")
  }


  module.exports = fonctionsCommande
