const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(actif) => "souscategorie"
 *
 */

const info = {
  revision: 13,
  name: "catalogueBug2",
  created: "2023-09-09T05:50:57.519Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "souscategorie",
      "actif",
      {
        type: Sequelize.BOOLEAN,
        field: "actif",
        comment: "Actif?",
        defaultValue: true,
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "souscategorie",
      "actif",
      {
        type: Sequelize.STRING,
        field: "actif",
        comment: "Actif?",
        defaultValue: true,
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
