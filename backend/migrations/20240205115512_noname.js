const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * removeColumn(adresse) => "commande"
 * addColumn(adressedelivraison) => "commande"
 * addColumn(adressedefacturation) => "commande"
 *
 */

const info = {
  revision: 29,
  name: "noname",
  created: "2024-02-05T11:55:12.829Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commande", "adresse", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "adressedelivraison",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "adresse", key: "id" },
        field: "adressedelivraison",
        name: "adressedelivraison",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "adressedefacturation",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "adresse", key: "id" },
        field: "adressedefacturation",
        name: "adressedefacturation",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "removeColumn",
    params: ["commande", "adressedelivraison", { transaction }],
  },
  {
    fn: "removeColumn",
    params: ["commande", "adressedefacturation", { transaction }],
  },
  {
    fn: "addColumn",
    params: [
      "commande",
      "adresse",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        references: { model: "adresse", key: "id" },
        field: "adresse",
        name: "adresse",
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
