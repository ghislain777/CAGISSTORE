const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * renameColumn(datereception) => "commande"
 * renameColumn(dateexpedition) => "commande"
 * renameColumn(dateconfirmation) => "commande"
 * addColumn(statut) => "commande"
 *
 */

const info = {
  revision: 23,
  name: "noname",
  created: "2023-10-27T11:59:59.718Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: ["commande", "datereception", "datedereception"],
  },
  {
    fn: "renameColumn",
    params: ["commande", "dateexpedition", "datedexpedition"],
  },
  {
    fn: "renameColumn",
    params: ["commande", "dateconfirmation", "datedeconfirmation"],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "statut",
      {
        type: Sequelize.STRING,
        field: "statut",
        comment: "Statut",
        defaultValue: "",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "renameColumn",
    params: ["commande", "datedereception", "datereception"],
  },
  {
    fn: "renameColumn",
    params: ["commande", "datedexpedition", "dateexpedition"],
  },
  {
    fn: "renameColumn",
    params: ["commande", "datedeconfirmation", "dateconfirmation"],
  },
  {
    fn: "removeColumn",
    params: ["commande", "statut", { transaction }],
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
