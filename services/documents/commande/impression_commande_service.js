const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const ImpressionCommandeService = {}
const {
  format
} = require("date-fns");
const fonctionsDocument = require("../fonctions_document");
const fonctionscommande = require("./fonctions_commandes");

// Génération du fichier PDF d'une commande
ImpressionCommandeService.genererCommande = (commande, entreprise, res) => {
  let doc = new PDFDocument({
    size: "A4",
    margin: 30
  });

  fonctionsDocument.genererEntete(doc, entreprise)
  fonctionsDocument.generateHr(doc, entreprise, 90)
  fonctionscommande.genererInfosClient(doc, commande, entreprise)
 // fonctionscommande.genererDetailscommande(doc, commande)
  fonctionsDocument.genererPiedDePage(doc, entreprise);
  doc.pipe(res)
  doc.end();
}

module.exports = ImpressionCommandeService