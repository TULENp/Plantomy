'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User);
            Order.belongsTo(models.OrderStatus);
        }
    }
    Order.init({
        Date:DataTypes.DATE,
        Paid:DataTypes.BOOLEAN,
        Address:DataTypes.STRING,
        Cost: DataTypes.DECIMAL,
    }, {
        sequelize,
        modelName: 'Order',
        timestamps: false,
    });
    return Order;
};