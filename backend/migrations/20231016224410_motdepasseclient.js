const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(createdAt) => "utilisateur"
 * removeColumn(updatedAt) => "utilisateur"
 * addColumn(motdepasse) => "client"
 *
 */

const info = {
  revision: 16,
  name: "motdepasseclient",
  created: "2023-10-16T22:44:10.828Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["utilisateur", "createdAt", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["utilisateur", "updatedAt", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "client",
      "motdepasse",
      {
        type: Sequelize.STRING,
        field: "motdepasse",
        comment: "Mot de passe",
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
    params: ["client", "motdepasse", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "utilisateur",
      "createdAt",
      { type: Sequelize.DATE, field: "createdAt", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "utilisateur",
      "updatedAt",
      { type: Sequelize.DATE, field: "updatedAt", allowNull: false },
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
