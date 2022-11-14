'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductInfo extends Model {
        static associate(models) {
        }
    }
    ProductInfo.init({
        Description: DataTypes.STRING,
        Text: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'ProductInfo',
        timestamps: false,
    });
    return ProductInfo;
};