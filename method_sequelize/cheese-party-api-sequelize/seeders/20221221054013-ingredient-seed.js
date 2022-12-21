'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ingredients', [
      // Insert data here
      {
        name: 'cows milk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'goats milk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'salt',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients', null, {});
  }
};
