'use strict';
const questions = require('../middleware/handbook').questions;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.sequelize.transaction(async (t) => {
        for(var k in questions) {
          await queryInterface.addColumn('ProductChars', questions[k].value, {
            type: Sequelize.DataTypes.INTEGER,
          }, {transaction: t});
        }
      });
    } catch(err) {
      console.log(err);
    }
  },

  async down (queryInterface, Sequelize) {
    try {
      await queryInterface.sequelize.transaction(async (t) => {
        for(var k in questions) {
          await queryInterface.removeColumn('ProductChars', questions[k].value, {transaction: t});
        }
      });
    } catch(err) {
      console.log(err);
    }
  }
};
