'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User);
            Cart.belongsTo(models.Product);
        }
    }
    Cart.init({
        Count: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};