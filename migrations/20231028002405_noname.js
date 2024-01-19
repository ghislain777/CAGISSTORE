const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(defaut) => "moyendepayement"
 * addColumn(defaut) => "transporteur"
 *
 */

const info = {
  revision: 24,
  name: "noname",
  created: "2023-10-28T00:24:05.595Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "moyendepayement",
      "defaut",
      {
        type: Sequelize.BOOLEAN,
        field: "defaut",
        comment: "Par défaut?",
        defaultValue: false,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "transporteur",
      "defaut",
      {
        type: Sequelize.BOOLEAN,
        field: "defaut",
        comment: "Par défaut",
        defaultValue: false,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["moyendepayement", "defaut", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["transporteur", "defaut", { transaction }],
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
