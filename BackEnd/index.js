const express = require('express');
const path = require('path');
const { Sequelize } = require('./config/database'); // connection object
const db = require('./config/database'); // db context
const wL = require('./config/config.json').whiteList; // white list of CORS
const bodyParser = require('body-parser'); 
const passport = require('passport');
const cors = require('cors');



//testing db
db.authenticate()
.then(() => console.log('Connected'))
.catch(err => console.log(err));

const app = express();
// adding body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// adding passport
app.use(passport.initialize());
require('./middleware/passport')(passport);

// ROUTES
app.use('/api/auth', require('./routes/auth')); //authorization routes
app.use('/api/fav', require('./routes/fav')); //favorite routes
app.use('/api/cart', require('./routes/cart')); // cart routes
app.use('/api/goods', require('./routes/goods')); // goods routes
app.use('/api/order', require('./routes/order')); // order routes
app.use('/api/user', require('./routes/user')); // user routes
// ROUTES

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// Export the Express-serv
module.exports = app;