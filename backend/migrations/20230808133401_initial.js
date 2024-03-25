const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "menu", deps: []
 * createTable() => "parametre", deps: []
 * createTable() => "role", deps: []
 * createTable() => "activite", deps: [menu]
 * createTable() => "utilisateur", deps: [role]
 * createTable() => "privilege", deps: [activite, role]
 * createTable() => "media", deps: [utilisateur]
 *
 */

const info = {
  revision: 1,
  name: "initial",
  created: "2023-08-08T13:34:01.432Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "menu",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
        icone: {
          type: Sequelize.STRING,
          field: "icone",
          comment: "Icone",
          defaultValue: "",
          allowNull: false,
        },
        position: {
          type: Sequelize.INTEGER,
          field: "position",
          comment: "Position",
          defaultValue: 1,
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "parametre",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom du parametre",
          unique: true,
          defaultValue: "",
          allowNull: false,
        },
        valeur: {
          type: Sequelize.STRING,
          field: "valeur",
          comment: "Valeur",
          defaultValue: "",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "role",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "activite",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          defaultValue: "",
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: true,
        },
        chemain: {
          type: Sequelize.STRING,
          field: "chemain",
          comment: "Chemain",
          defaultValue: "",
          allowNull: true,
        },
        icone: {
          type: Sequelize.STRING,
          field: "icone",
          comment: "Icone",
          defaultValue: "",
          allowNull: true,
        },
        position: {
          type: Sequelize.INTEGER,
          field: "position",
          comment: "Position",
          defaultValue: 1,
          allowNull: true,
        },
        menu: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "NO ACTION",
          references: { model: "menu", key: "id" },
          field: "menu",
          name: "menu",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "utilisateur",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          comment: "Nom",
          allowNull: false,
        },
        prenom: { type: Sequelize.STRING, field: "prenom", allowNull: false },
        telephone: {
          type: Sequelize.STRING,
          field: "telephone",
          comment: "Téléphone",
          allowNull: false,
        },
        email: { type: Sequelize.STRING, field: "email", allowNull: false },
        motdepasse: {
          type: Sequelize.STRING,
          field: "motdepasse",
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          defaultValue: false,
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          field: "photo",
          defaultValue: "",
          allowNull: false,
        },
        token: {
          type: Sequelize.STRING,
          field: "token",
          defaultValue: "",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
        role: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "role", key: "id" },
          field: "role",
          name: "role",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "privilege",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          primaryKey: true,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          field: "description",
          comment: "Description",
          defaultValue: "",
          allowNull: false,
        },
        actif: {
          type: Sequelize.BOOLEAN,
          field: "actif",
          comment: "Actif?",
          defaultValue: true,
          allowNull: false,
        },
        activite: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "activite", key: "id" },
          field: "activite",
          name: "activite",
          allowNull: true,
        },
        role: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "role", key: "id" },
          field: "role",
          name: "role",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "media",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          comment: "ID",
          primaryKey: true,
          autoIncrement: true,
        },
        nom: {
          type: Sequelize.STRING,
          field: "nom",
          defaultValue: "",
          comment: "Nom",
          allowNull: false,
        },
        modele: {
          type: Sequelize.STRING,
          field: "modele",
          comment: "Modele",
          defaultValue: "",
          allowNull: true,
        },
        champ: {
          type: Sequelize.STRING,
          field: "champ",
          comment: "Collone",
          defaultValue: "photo",
          allowNull: true,
        },
        type: {
          type: Sequelize.STRING,
          field: "type",
          comment: "type de media",
          defaultValue: "image",
          allowNull: true,
        },
        fichier: {
          type: Sequelize.STRING,
          field: "fichier",
          comment: "fichier",
          defaultValue: "",
          allowNull: false,
        },
        utilisateur: {
          type: Sequelize.INTEGER,
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
          references: { model: "utilisateur", key: "id" },
          field: "utilisateur",
          name: "utilisateur",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["activite", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["media", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["menu", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["parametre", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["privilege", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["role", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["utilisateur", { transaction }],
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
