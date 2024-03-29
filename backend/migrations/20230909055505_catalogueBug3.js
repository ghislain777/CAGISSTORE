const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(prixpromo) => "produit"
 *
 */

const info = {
  revision: 14,
  name: "catalogueBug3",
  created: "2023-09-09T05:55:05.007Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "produit",
      "prixpromo",
      {
        type: Sequelize.INTEGER,
        field: "prixpromo",
        comment: "Prix promo",
        defaultValue: 0,
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
      "produit",
      "prixpromo",
      {
        type: Sequelize.STRING,
        field: "prixpromo",
        comment: "Prix promo",
        defaultValue: "",
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
