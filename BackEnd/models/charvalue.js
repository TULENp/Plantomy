'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CharValue extends Model {
        static associate(models) {
            CharValue.belongsTo(models.Characteristic);
        }
    }
    CharValue.init({
        Value:DataTypes.INTEGER,
        Name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'CharValue',
        timestamps: false,
    });
    return CharValue;
};