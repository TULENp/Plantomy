const express = require('express');
const path = require('path');

const { Sequelize } = require('./config/database'); // connection object
const db = require('./config/database'); // db context

//testing db
db.authenticate()
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));