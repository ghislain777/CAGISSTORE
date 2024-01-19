const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "categorie", deps: []
 * createTable() => "souscategorie", deps: [categorie]
 * createTable() => "produit", deps: [fournisseur, souscategorie]
 * addColumn(produit) => "media"
 * addColumn(souscategorie) => "media"
 * addColumn(categorie) => "media"
 *
 */

const info = {
  revision: 11,
  name: "catalogueModule",
  created: "2023-09-09T05:08:10.663Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "categorie",
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
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif?",
          defaultValue: true,
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "souscategorie",
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
        actif: {
          type: Sequelize.STRING,
          field: "actif",
          comment: "Actif?",
          defaultValue: true,
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: true,
        },
        categorie: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "categorie", key: "id" },
          field: "categorie",
          name: "categorie",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "produit",
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
          defaultValue: "",
          allowNull: false,
        },
        descriptionlongue: {
          type: Sequelize.STRING,
          field: "descriptionlongue",
          comment: "Description longue",
          defaultValue: "",
          allowNull: true,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif?",
          defaultValue: true,
          allowNull: false,
        },
        enpromo: {
          type: Sequelize.BOOLEAN,
          field: "enpromo",
          comment: "En promo?",
          defaultValue: false,
          allowNull: false,
        },
        prixdevente: {
          type: Sequelize.INTEGER,
          field: "prixdevente",
          comment: "Prix de vente",
          defaultValue: 0,
          allowNull: false,
        },
        prixpromo: {
          type: Sequelize.STRING,
          field: "prixpromo",
          comment: "Prix promo",
          defaultValue: "",
          allowNull: false,
        },
        prixdachat: {
          type: Sequelize.INTEGER,
          field: "prixdachat",
          comment: "Prix d'achat",
          defaultValue: 0,
          allowNull: false,
        },
        fournisseur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "fournisseur", key: "id" },
          field: "fournisseur",
          name: "fournisseur",
          allowNull: true,
        },
        sousdategorie: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "souscategorie", key: "id" },
          field: "sousdategorie",
          name: "sousdategorie",
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
      "produit",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "produit", key: "id" },
        field: "produit",
        name: "produit",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "souscategorie",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "souscategorie", key: "id" },
        field: "souscategorie",
        name: "souscategorie",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "categorie",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "categorie", key: "id" },
        field: "categorie",
        name: "categorie",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "produit", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "souscategorie", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "categorie", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categorie", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["produit", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["souscategorie", { transaction }],
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
