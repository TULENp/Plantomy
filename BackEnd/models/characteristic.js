'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Characteristic extends Model {
        static associate(models) {}
    }
    Characteristic.init({
        Name:DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Characteristic',
    });
    return Characteristic;
};