'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
        }
    }
    Category.init({
        Category: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Category',
        timestamps: false,
    });
    return Category;
};