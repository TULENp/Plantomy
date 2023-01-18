const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart');
const passport = require('passport');

router.post('/addToCart', passport.authenticate('jwt', {session: false}), controller.addToCart);
router.post('/dropFromCart', passport.authenticate('jwt', {session: false}), controller.dropFromCart);
router.post('/incGoods', passport.authenticate('jwt', {session: false}), controller.incGoods);
router.post('/decGoods', passport.authenticate('jwt', {session: false}), controller.decGoods);
router.get('/getCart', passport.authenticate('jwt', {session: false}), controller.getCart);

module.exports = router;