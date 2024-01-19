const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(prenom) => "utilisateur"
 * changeColumn(email) => "utilisateur"
 * changeColumn(photo) => "utilisateur"
 * changeColumn(token) => "utilisateur"
 *
 */

const info = {
  revision: 26,
  name: "noname",
  created: "2024-01-03T16:31:30.051Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "prenom",
      {
        type: Sequelize.STRING,
        field: "prenom",
        defaultvalue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "email",
      { type: Sequelize.STRING, field: "email", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "photo",
      {
        type: Sequelize.STRING,
        field: "photo",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "token",
      {
        type: Sequelize.STRING,
        field: "token",
        defaultValue: "",
        allowNull: true,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "prenom",
      { type: Sequelize.STRING, field: "prenom", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "email",
      { type: Sequelize.STRING, field: "email", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "photo",
      {
        type: Sequelize.STRING,
        field: "photo",
        defaultValue: "",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "utilisateur",
      "token",
      {
        type: Sequelize.STRING,
        field: "token",
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
