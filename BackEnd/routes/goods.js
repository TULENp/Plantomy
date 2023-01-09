const express = require('express');
const router = express.Router();
const controller = require('../controllers/goods');
const passport = require('passport');

router.get('/getAll', controller.getAll);
router.get('/getAllAuth', passport.authenticate('jwt', {session: false}), controller.getAllAuth);
router.post('/getByFilter', controller.getByFilters);
router.post('/getByInterfaceFilters', controller.getByInterfaceFilters);
router.get('/', controller.get);

module.exports = router;