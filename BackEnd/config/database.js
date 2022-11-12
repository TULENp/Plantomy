const { Sequelize } = require('sequelize');
module.exports = new Sequelize({
    database: 'plantomydb',
    username: 'postgres',
    password: 'rootroot',
    host: 'localhost',
    dialect: 'postgres'
});