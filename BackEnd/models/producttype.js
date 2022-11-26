'use strict';
const { Model, STRING } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductType extends Model {
        static associate(models) {

        }
    }
    ProductType.init({
        Type:DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'ProductType',
        timestamps: false,
    });
    return ProductType;
};