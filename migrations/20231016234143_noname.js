const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(email) => "client"
 *
 */

const info = {
  revision: 17,
  name: "noname",
  created: "2023-10-16T23:41:43.280Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "client",
      "email",
      {
        type: Sequelize.STRING,
        field: "email",
        comment: "Email",
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
    params: ["client", "email", { transaction }],
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
