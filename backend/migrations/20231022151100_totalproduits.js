const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(totalproduits) => "commande"
 * addColumn(totalproduits) => "panier"
 *
 */

const info = {
  revision: 20,
  name: "totalproduits",
  created: "2023-10-22T15:11:00.461Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "commande",
      "totalproduits",
      {
        type: Sequelize.INTEGER,
        field: "totalproduits",
        comment: "Total produits",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "panier",
      "totalproduits",
      {
        type: Sequelize.INTEGER,
        field: "totalproduits",
        comment: "Total produits",
        defaultValue: 0,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commande", "totalproduits", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["panier", "totalproduits", { transaction }],
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
