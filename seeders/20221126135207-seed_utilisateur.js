'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Utilisateur',[

{
  nom: "KEPNIA",
  prenom: "Ghislain", 
  telephone: "0101323228",
  email:"tghislain@gmail.com",
  motdepasse: "123", 
  actif: true,
  role:6
},

{
  nom: "Tchakounte",
  prenom: "costa", 
  telephone: "664222527",
  email:"tghislain@zentechnologies.net",
  motdepasse: "abc", 
  actif: true,
  role:6
}

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
