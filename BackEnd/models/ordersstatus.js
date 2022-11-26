'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class OrderStatus extends Model {
        static associate(models) {

        }
    }
    OrderStatus.init({
        Name:DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'OrderStatus',
        timestamps: false,
    });
    return OrderStatus;
};