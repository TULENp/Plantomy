'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductChar extends Model {
        static associate(models) {
            ProductChar.belongsTo(models.Product);
            ProductChar.belongsTo(models.Characteristic);
        }
    }
    ProductChar.init({
        
    }, {
        sequelize,
        modelName: 'ProductChar',
    });
    return ProductChar;
};