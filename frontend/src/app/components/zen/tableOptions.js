

 export const tableOptions= {
  
  selectableRows: "none",
    textLabels: {
        body: {
          noMatch: "Auccun enregistrement trouvé",
          toolTip: "tri",
          columnHeaderTooltip: column => `tri pour ${column.label}`
        },
        pagination: {
          next: "Page suivante",
          previous: "Page précédente",
          rowsPerPage: "Lignes par page:",
          displayRows: "sur",
        },
        toolbar: {
          search: "Rechercher",
          downloadCsv: "Télécharger en CSV",
          print: "Imprimer",
          viewColumns: "Afficher les collones",
          filterTable: "Fiiltrer la table",
        },
        filter: {
          all: "Tout",
          title: "FILTRES",
          reset: "RESET",
        },
        viewColumns: {
          title: "Afficher les collones",
          titleAria: "Afficher/Cacher les collones",
        },
        selectedRows: {
          text: "lignes(s) sélectionées",
          delete: "Supprimer",
          deleteAria: "Supprimer les lignes sélectionnées",
        },
}
}