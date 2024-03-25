const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * addColumn(actif) => "fournisseur"
 * addColumn(actif) => "moyendepayement"
 * addColumn(actif) => "transporteur"
 *
 */

const info = {
  revision: 9,
  name: "modulePartenairesActifs",
  created: "2023-09-07T17:39:08.109Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "addColumn",
    params: [
      "fournisseur",
      "actif",
      {
        type: Sequelize.BOOLEAN,
        field: "actif",
        comment: "Actif?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "moyendepayement",
      "actif",
      {
        type: Sequelize.STRING,
        field: "actif",
        comment: "Actif?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "transporteur",
      "actif",
      {
        type: Sequelize.STRING,
        field: "actif",
        comment: "Actif?",
        defaultValue: true,
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["fournisseur", "actif", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["moyendepayement", "actif", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["transporteur", "actif", { transaction }],
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
