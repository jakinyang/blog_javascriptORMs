'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      // Insert data here
      {
        name: 'soft',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ripened',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'blue-veined',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'semi-hard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'brined',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'semi-soft',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'whey',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'hard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fresh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'smear-ripened',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
