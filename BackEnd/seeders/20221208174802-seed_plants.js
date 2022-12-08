'use strict';
const goods = require('../middleware/handbook').goods;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await this.down(queryInterface, Sequelize);

    const prodtypes = [];
    let counter = 0;
    for (let i = 0; i<goods.length; i++) {
      var hasMatch = false;
      for (var index = 0; index < prodtypes.length; index++) {
        if(prodtypes[index].Type === goods[i].type){
          hasMatch = true;
          break;
        }
      }
      if (!hasMatch) {
        prodtypes.push({id: ++counter, Type: goods[i].type});
      }
    }
    await queryInterface.bulkInsert('ProductTypes', prodtypes);

    for (var k in goods) {
      await queryInterface.bulkInsert('ProductInfos', [{
        id: goods[k].id,
        Description: goods[k].description,
        Text: goods[k].text ? goods[k].text : '',
      }]);
      let type = prodtypes.find(el => el.Type === goods[k].type);
      await queryInterface.bulkInsert('Products', [{
        id: goods[k].id,
        Name: goods[k].title,
        Price: goods[k].price,
        Image: goods[k].image,
        ProductInfoId: goods[k].id,
        ProductTypeId: type.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }]);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductTypes', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('ProductInfos', null, {});
  }
};
