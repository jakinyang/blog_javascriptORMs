'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CheeseCategories', [
      // Insert data here
      {
        CheeseId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 1,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 2,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 2,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 3,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 3,
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 4,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 4,
        CategoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 5,
        CategoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 6,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 6,
        CategoryId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 7,
        CategoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 7,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 8,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 8,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 9,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 9,
        CategoryId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 10,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CheeseCategories', null, {});
  }
};
