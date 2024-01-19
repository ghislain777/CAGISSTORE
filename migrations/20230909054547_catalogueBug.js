const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(sousdategorie) => "produit"
 * addColumn(souscategorie) => "produit"
 *
 */

const info = {
  revision: 12,
  name: "catalogueBug",
  created: "2023-09-09T05:45:47.058Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["produit", "sousdategorie", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "produit",
      "souscategorie",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "souscategorie", key: "id" },
        field: "souscategorie",
        name: "souscategorie",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["produit", "souscategorie", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "produit",
      "sousdategorie",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "souscategorie", key: "id" },
        field: "sousdategorie",
        name: "sousdategorie",
        allowNull: true,
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
