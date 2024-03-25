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

      await queryInterface.bulkInsert('Role', [
        {
        nom: 'Administrateur',
        description: "Super administrateur de la plateforme"
      },
      {
        nom: 'Utilisateur',
        description: "Simple utilisateur de la plateforme"
      },
      {
        nom: 'visiteur',
        description: "Visiteur de la plateforme"
      }
    ], {});
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
