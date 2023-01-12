const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart');
const passport = require('passport');

router.post('/addtoCart', passport.authenticate('jwt', {session: false}), controller.addtoCart);
router.post('/dropfromCart', passport.authenticate('jwt', {session: false}), controller.dropfromCart);
router.post('/incGoods', passport.authenticate('jwt', {session: false}), controller.incGoods);
router.post('/decGoods', passport.authenticate('jwt', {session: false}), controller.decGoods);
router.get('/getCart', passport.authenticate('jwt', {session: false}), controller.getCart);

module.exports = router;