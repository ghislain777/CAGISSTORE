const PDFDocument = require("pdfkit-table");
const {
    format
  } = require("date-fns");

const fonctionsDocument = {}

fonctionsDocument.genererEntete = (doc, entreprise) => {
 // const entreprise = entrepriseService.getEntreprise()
   // entreprise = require("./entreprise")
  doc
  .image(entreprise.logo, 10, 10, {
    width: 100,
  })
  .fillColor("#444444")
  .fontSize(20)
  .text("", 110, 57)
  .fontSize(10)
  .text(entreprise.nom, 200, 30, {
    align: "right"
  })
  .text(entreprise.adresseLigne1, 200, 45, {
    align: "right"
  })
  .text(entreprise.adresseLigne2, 200, 60, {
    align: "right"
  })
  .text(`Tel: ${entreprise.telephone}`, 200, 75, {
    align: "right"
  })
  // .text(`Email: ${entreprise.email}`, 200, 90, {
  //   align: "right"
  // })
//  .moveDown()
}

fonctionsDocument.generateHr = (doc, entreprise, y) => {
    doc
      .strokeColor(entreprise.couleur)
      .lineWidth(1)
      .moveTo(20, y)
      .lineTo(570, y)
      .stroke();
  }

  
  fonctionsDocument.genererTitreDocument = (doc, titre) => {
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text(`${titre}`, 50, 120);

  }


  fonctionsDocument.genererPiedDePage = (doc, entreprise) => {
    doc
      .font("Helvetica")
      .fontSize(10)
      .text(
        entreprise.piedDePage,
        50,
        800, {
          align: "center",
          width: 500
        }
      );
  }
  


module.exports = fonctionsDocument