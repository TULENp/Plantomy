const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');
const passport = require('passport');

router.get('/getOrders', passport.authenticate('jwt', {session: false}), controller.getOrders);
router.post('/addOrder', passport.authenticate('jwt', {session: false}), controller.addOrder);
router.post('/cancelOrder', passport.authenticate('jwt', {session: false}), controller.cancelOrder);
router.post('/getProductsInOrder', passport.authenticate('jwt', {session: false}), controller.getProductsInOrder);

module.exports = router;