'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cheeses', [
      // Insert data here
      {
        name: 'Brie',
        origin: 'France',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Grogonzola',
        origin: 'Italy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gouda',
        origin: 'Netherlands',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brunost',
        origin: 'Finland',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bergkase',
        origin: 'Germany',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Quark',
        origin: 'Hungary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Wensleydale',
        origin: 'England',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Stichelton',
        origin: 'England',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Reblochon',
        origin: 'France',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cendrillon',
        origin: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cheeses', null, {});
  }
};
