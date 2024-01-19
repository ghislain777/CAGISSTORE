const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(commune) => "adresse"
 * addColumn(quartier) => "adresse"
 * addColumn(prenom) => "adresse"
 * addColumn(Nom) => "adresse"
 *
 */

const info = {
  revision: 21,
  name: "noname",
  created: "2023-10-25T01:06:31.062Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["adresse", "commune", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "adresse",
      "quartier",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "quartier", key: "id" },
        field: "quartier",
        name: "quartier",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "adresse",
      "prenom",
      {
        type: Sequelize.STRING,
        field: "prenom",
        comment: "Prénom",
        defaultValue: "",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "adresse",
      "Nom",
      {
        type: Sequelize.STRING,
        field: "Nom",
        comment: "Nom",
        defaultValue: "",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["adresse", "quartier", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["adresse", "prenom", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["adresse", "Nom", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "adresse",
      "commune",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "commune", key: "id" },
        field: "commune",
        name: "commune",
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
