const express = require('express');
const router = express.Router();
const controller = require('../controllers/fav');
const passport = require('passport');

router.post('/switchfav', passport.authenticate('jwt', {session: false}), controller.switchFav);
router.get('/showfav', passport.authenticate('jwt', {session: false}), controller.showFav);

module.exports = router;