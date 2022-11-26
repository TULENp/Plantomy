'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.ProductType);
            Product.belongsTo(models.ProductInfo);
        }
    }
    Product.init({
        Name: DataTypes.STRING,
        Price: DataTypes.INTEGER,
        Image: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};