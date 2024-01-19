const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(ville) => "media"
 * createTable() => "fournisseur", deps: []
 * createTable() => "moyendepayement", deps: []
 * createTable() => "transporteur", deps: []
 * addColumn(fournisseur) => "media"
 * addColumn(transporteur) => "media"
 * addColumn(moyendepayement) => "media"
 *
 */

const info = {
  revision: 8,
  name: "modulePartenaires",
  created: "2023-09-07T17:34:48.301Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "ville", { transaction }],
  },
  {
    fn: "createTable",
    params: [
      "fournisseur",
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
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          defaultValue: "",
          allowNull: true,
        },
        adresse: {
          type: Sequelize.STRING,
          field: "adresse",
          comment: "Adresse",
          defaultValue: "",
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          comment: "Email",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "moyendepayement",
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
      "transporteur",
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
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          defaultValue: "",
          allowNull: false,
        },
        adresse: {
          type: Sequelize.STRING,
          field: "adresse",
          comment: "Adresse",
          defaultValue: "",
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
    fn: "addColumn",
    params: [
      "media",
      "fournisseur",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "fournisseur", key: "id" },
        field: "fournisseur",
        name: "fournisseur",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "transporteur",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "transporteur", key: "id" },
        field: "transporteur",
        name: "transporteur",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "moyendepayement",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "moyendepayement", key: "id" },
        field: "moyendepayement",
        name: "moyendepayement",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["media", "fournisseur", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "transporteur", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["media", "moyendepayement", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["fournisseur", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["moyendepayement", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["transporteur", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "media",
      "ville",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "ville", key: "id" },
        field: "ville",
        name: "ville",
        allowNull: true,
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
