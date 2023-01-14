const express = require('express');
const router = express.Router();
const controller = require('../controllers/goods');
const passport = require('passport');

router.get('/getAll', controller.getAll);
router.get('/getAllAuth', passport.authenticate('jwt', {session: false}), controller.getAllAuth);
router.post('/getByFilter', controller.getByFilters);
router.post('/getByFilterAuth', passport.authenticate('jwt', {session: false}), controller.getByFiltersAuth);
router.post('/getFilteredProducts', controller.getFilteredProducts);
router.post('/getFilteredProductsAuth', passport.authenticate('jwt', {session: false}), controller.getFilteredProductsAuth);
router.get('/getProduct', controller.get);
router.get('/getProductAuth', passport.authenticate('jwt', {session: false}), controller.getAuth);

module.exports = router;