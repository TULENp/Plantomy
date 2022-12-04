'use strict';
const questions  = require('../middleware/handbook').questions;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let charId = 0;
    for (let i = 0; i<questions.length; i++) {
      await queryInterface.bulkInsert('Characteristics', [{
        id: questions[i].id,
        Name: questions[i].value,
      }]);
      for (let j=0; j<questions[i].options.length; j++) {
        await queryInterface.bulkInsert('CharValues', [{
          id: ++charId,
          CharacteristicId: questions[i].id,
          Value: questions[i].options[j].value,
          Name: questions[i].options[j].title,
        }]);
      }
    }
    return;
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characteristics', null, {});
    await queryInterface.bulkDelete('CharValues', null, {});
    return;
  }
};


