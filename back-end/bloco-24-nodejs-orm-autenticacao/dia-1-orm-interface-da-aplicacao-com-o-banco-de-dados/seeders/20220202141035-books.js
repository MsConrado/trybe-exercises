'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const Books = queryInterface.bulkInsert('Books', [
      {
        title: 'Vida do Souza',
        author: 'Matheus',
        pageQuantity: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
    return Books;
  },

  async down(queryInterface, Sequelize) {
    const Books = queryInterface.bulkDelete('Users', null, {});
    return Books;
  },
};
