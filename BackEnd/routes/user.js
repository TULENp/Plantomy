const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');
const passport = require('passport');

router.get('/userInfo', passport.authenticate('jwt', {session: false}), controller.getUserInfo);
router.post('/changeUserInfo', passport.authenticate('jwt', {session: false}), controller.changeUserInfo);

module.exports = router;