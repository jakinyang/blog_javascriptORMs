'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CheeseIngredients', [
      // Insert data here
      {
        CheeseId: 1,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 1,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 2,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 2,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 3,
        IngredientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 3,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 4,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 4,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 5,
        IngredientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 5,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 6,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 6,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 7,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 7,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 8,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 8,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 9,
        IngredientId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 9,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 10,
        IngredientId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CheeseId: 10,
        IngredientId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CheeseIngredients', null, {});
  }
};
