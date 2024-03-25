const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(actif) => "moyendepayement"
 * changeColumn(actif) => "transporteur"
 *
 */

const info = {
  revision: 10,
  name: "modulePartenairesActifs",
  created: "2023-09-07T18:26:55.274Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "moyendepayement",
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
    fn: "changeColumn",
    params: [
      "transporteur",
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
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
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
    fn: "changeColumn",
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
