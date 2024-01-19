const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "statutcommande", deps: []
 * createTable() => "client", deps: [quartier]
 * createTable() => "adresse", deps: [client, commune]
 * createTable() => "panier", deps: [client]
 * createTable() => "commande", deps: [client, panier, transporteur, moyendepayement, adresse, statutcommande]
 * createTable() => "lignepanier", deps: [produit]
 * createTable() => "lignecommande", deps: [produit, commande]
 * addColumn(client) => "media"
 * changeColumn(prixpromo) => "produit"
 *
 */

const info = {
  revision: 15,
  name: "MediaClients",
  created: "2023-09-12T07:03:16.081Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "statutcommande",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "client",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        prenom: {
          type: Sequelize.STRING,
          field: "prenom",
          comment: "Prénom",
          defaultValue: "",
          allowNull: true,
        },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        quartier: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "quartier", key: "id" },
          field: "quartier",
          name: "quartier",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "adresse",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        alias: {
          type: Sequelize.STRING,
          field: "alias",
          comment: "Alias de l'adresse",
          allowNull: false,
        },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          defaultValue: "",
          allowNull: false,
        },
        Adresse: {
          type: Sequelize.STRING,
          field: "Adresse",
          comment: "Adresse",
          defaultValue: "",
          allowNull: false,
        },
        pardefaut: {
          type: Sequelize.BOOLEAN,
          field: "pardefaut",
          comment: "Adresse par défaut?",
          defaultValue: true,
          allowNull: false,
        },
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
        },
        commune: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commune", key: "id" },
          field: "commune",
          name: "commune",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "panier",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        montantttc: {
          type: Sequelize.INTEGER,
          field: "montantttc",
          comment: "Montant TTC",
          defaultValue: 0,
          allowNull: false,
        },
        montantht: {
          type: Sequelize.INTEGER,
          field: "montantht",
          comment: "Montant HT",
          defaultValue: 0,
          allowNull: false,
        },
        montanttaxe: {
          type: Sequelize.INTEGER,
          field: "montanttaxe",
          comment: "Montant Taxe",
          defaultValue: 0,
          allowNull: false,
        },
        remise: {
          type: Sequelize.INTEGER,
          field: "remise",
          comment: "Remise",
          allowNull: true,
        },
        session: {
          type: Sequelize.STRING,
          field: "session",
          comment: "Session",
          defaultValue: "",
          allowNull: true,
        },
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "commande",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        montantttc: {
          type: Sequelize.INTEGER,
          field: "montantttc",
          comment: "Montant TTC",
          allowNull: false,
        },
        montanttaxe: {
          type: Sequelize.INTEGER,
          field: "montanttaxe",
          comment: "Montant Taxe",
          allowNull: false,
        },
        montantht: {
          type: Sequelize.INTEGER,
          field: "montantht",
          comment: "Montant HT",
          allowNull: false,
        },
        remise: {
          type: Sequelize.INTEGER,
          field: "remise",
          comment: "Remise",
          allowNull: false,
        },
        montanttransport: {
          type: Sequelize.INTEGER,
          field: "montanttransport",
          comment: "Montant transport",
          allowNull: false,
        },
        delaisdelivraison: {
          type: Sequelize.STRING,
          field: "delaisdelivraison",
          comment: "Délais de livraison",
          defaultValue: "",
          allowNull: false,
        },
        messageduclient: {
          type: Sequelize.STRING,
          field: "messageduclient",
          comment: "Message du client",
          defaultValue: "",
          allowNull: true,
        },
        datecommande: {
          type: Sequelize.DATE,
          field: "datecommande",
          comment: "Date de la commande",
          allowNull: false,
        },
        dateconfirmation: {
          type: Sequelize.DATE,
          field: "dateconfirmation",
          comment: "Date de confirmation",
          allowNull: true,
        },
        dateexpedition: {
          type: Sequelize.DATE,
          field: "dateexpedition",
          comment: "Date d'expédition",
          allowNull: true,
        },
        datereception: {
          type: Sequelize.DATE,
          field: "datereception",
          comment: "Date de reception",
          allowNull: true,
        },
        dateannulation: {
          type: Sequelize.DATE,
          field: "dateannulation",
          comment: "Date d'annulation",
          allowNull: true,
        },
        datepayement: {
          type: Sequelize.DATE,
          field: "datepayement",
          comment: "Date de payement",
          allowNull: true,
        },
        client: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "client", key: "id" },
          field: "client",
          name: "client",
          allowNull: true,
        },
        panier: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "panier", key: "id" },
          field: "panier",
          name: "panier",
          allowNull: true,
        },
        transporteur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "transporteur", key: "id" },
          field: "transporteur",
          name: "transporteur",
          allowNull: true,
        },
        moyendepayement: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "moyendepayement", key: "id" },
          field: "moyendepayement",
          name: "moyendepayement",
          allowNull: true,
        },
        adresse: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "adresse", key: "id" },
          field: "adresse",
          name: "adresse",
          allowNull: true,
        },
        statutcommande: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "statutcommande", key: "id" },
          field: "statutcommande",
          name: "statutcommande",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "lignepanier",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        quantite: {
          type: Sequelize.INTEGER,
          field: "quantite",
          comment: "Quantité",
          allowNull: false,
        },
        prixunitaire: {
          type: Sequelize.INTEGER,
          field: "prixunitaire",
          comment: "Prix unitaire",
          allowNull: false,
        },
        prixtotal: {
          type: Sequelize.INTEGER,
          field: "prixtotal",
          comment: "Prix total",
          allowNull: false,
        },
        produit: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "produit", key: "id" },
          field: "produit",
          name: "produit",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "lignecommande",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        prixunitaire: {
          type: Sequelize.INTEGER,
          field: "prixunitaire",
          comment: "Prix unitaire",
          defaultValue: 1,
          allowNull: false,
        },
        quantite: {
          type: Sequelize.INTEGER,
          field: "quantite",
          comment: "Quantité",
          defaultValue: 0,
          allowNull: false,
        },
        prixtotal: {
          type: Sequelize.INTEGER,
          field: "prixtotal",
          comment: "Prix total",
          defaultValue: 0,
          allowNull: false,
        },
        produit: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "produit", key: "id" },
          field: "produit",
          name: "produit",
          allowNull: true,
        },
        commande: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commande", key: "id" },
          field: "commande",
          name: "commande",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "client",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "client", key: "id" },
        field: "client",
        name: "client",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "produit",
      "prixpromo",
      {
        type: Sequelize.INTEGER,
        field: "prixpromo",
        comment: "Prix promo",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "client", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["adresse", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["client", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["commande", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["lignecommande", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["lignepanier", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["panier", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["statutcommande", { transaction }],
  },
  {
    fn: "changeColumn",
    params: [
      "produit",
      "prixpromo",
      {
        type: Sequelize.INTEGER,
        field: "prixpromo",
        comment: "Prix promo",
        defaultValue: "",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
