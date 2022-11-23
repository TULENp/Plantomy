'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class OrderProduct extends Model {
        static associate(models) {
            OrderProduct.belongsTo(models.Order);
            OrderProduct.belongsTo(models.Product);
        }
    }
    OrderProduct.init({
        Count:DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'OrderProduct',
        timestamps: false,
    });
    return OrderProduct;
};