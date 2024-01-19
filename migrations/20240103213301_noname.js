const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(datedelivraison) => "commande"
 *
 */

const info = {
  revision: 27,
  name: "noname",
  created: "2024-01-03T21:33:01.414Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "commande",
      "datedelivraison",
      {
        type: Sequelize.DATE,
        field: "datedelivraison",
        comment: "Date de livraison",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commande", "datedelivraison", { transaction }],
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
