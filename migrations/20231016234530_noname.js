const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(description) => "client"
 *
 */

const info = {
  revision: 18,
  name: "noname",
  created: "2023-10-16T23:45:30.383Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "client",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
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
      "client",
      "description",
      {
        type: Sequelize.STRING,
        field: "description",
        comment: "Description",
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
