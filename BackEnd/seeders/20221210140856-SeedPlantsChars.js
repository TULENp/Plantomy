'use strict';
const plantschars = require('../middleware/dataexamples').plantschars;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.sequelize.transaction(async (t) => {
        for (var k in plantschars) {
          plantschars[k].ProductId = plantschars[k].id;
        }
        await queryInterface.bulkInsert('ProductChars', plantschars);
      });
    } catch(err) {
      console.log(err);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductChars', null, {});
  }
};
