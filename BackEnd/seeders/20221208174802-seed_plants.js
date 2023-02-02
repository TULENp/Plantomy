'use strict';
const goods = require('../middleware/dataexamples').goods;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.sequelize.transaction(async (t) => {
        await this.down(queryInterface, Sequelize);

        const prodtypes = [];
        const categories = [];
        let types_counter = 0;
        let cat_counter = 0;
        for (let i = 0; i<goods.length; i++) {
          var hasMatch_type = false;
          var hasMatch_category = false;
          for (var index = 0; index < prodtypes.length; index++) {
            if(prodtypes[index].Type === goods[i].type){
              hasMatch_type = true;
            }

            if(categories[index].Category === goods[i].category || !goods[i].category) {
              hasMatch_category = true;
            }

            if(hasMatch_category && hasMatch_type) {
              break;
            }
          }
          if (!hasMatch_type) {
            prodtypes.push({id: ++types_counter, Type: goods[i].type});
          }
          if (!hasMatch_category) {
            categories.push({id: ++cat_counter, Category: goods[i].category});
          }
        }
        await queryInterface.bulkInsert('ProductTypes', prodtypes, {transaction: t});
        await queryInterface.bulkInsert('Categories', categories, {transaction: t});

        for (var k in goods) {
          await queryInterface.bulkInsert('ProductInfos', [{
            id: goods[k].id,
            Description: goods[k].description,
            Text: goods[k].text ? goods[k].text : '',
          }], {transaction: t});
          let type = prodtypes.find(el => el.Type === goods[k].type);
          let category = categories.find(el => el.Category === goods[k].category);
          await queryInterface.bulkInsert('Products', [{
            id: goods[k].id,
            Name: goods[k].title,
            Price: goods[k].price,
            Image: goods[k].image,
            ProductInfoId: goods[k].id,
            ProductTypeId: type.id,
            CategoryId: category?.id ? category.id : null,
            Size: goods[k].size,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }], {transaction: t});
        }
          });
    } catch(err) {
      console.log(err);
    }
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('ProductInfos', null, {});
    await queryInterface.bulkDelete('ProductTypes', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
