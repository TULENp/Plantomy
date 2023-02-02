'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.ProductType);
            Product.belongsTo(models.ProductInfo);
            Product.belongsTo(models.Category);
        }
    }
    Product.init({
        Name: DataTypes.STRING,
        Price: DataTypes.INTEGER,
        Image: DataTypes.STRING,
        Size: DataTypes.STRING(5),
        Count: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};