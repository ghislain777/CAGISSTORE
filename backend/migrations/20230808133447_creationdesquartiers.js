const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "pay", deps: []
 * createTable() => "ville", deps: [pay]
 * createTable() => "commune", deps: [ville]
 * createTable() => "quartier", deps: [commune]
 *
 */

const info = {
  revision: 2,
  name: "creationdesquartiers",
  created: "2023-08-08T13:34:47.588Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "pay",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "ville",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
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
        pay: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
          references: { model: "pay", key: "id" },
          field: "pay",
          name: "pay",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "commune",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: false,
        },
        ville: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "ville", key: "id" },
          field: "ville",
          name: "ville",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "quartier",
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
        commune: {
          type: Sequelize.INTEGER,
          field: "commune",
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "commune", key: "id" },
          name: "commune",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["commune", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["pay", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["quartier", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["ville", { transaction }],
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
