const express = require('express');
const router = express.Router();
const controller = require('../controllers/fav');
const passport = require('passport');

router.post('/switchfav', passport.authenticate('jwt', {session: false}), controller.switchfav);
router.get('/showfav', passport.authenticate('jwt', {session: false}), controller.showfav);

module.exports = router;