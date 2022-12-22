const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const passport = require('passport');

router.get('/userInfo', passport.authenticate('jwt', {session: false}), controller.getUserInfo);

module.exports = router;