const express = require('express');
const router = express.Router();
const controller = require('../controllers/goods');
const passport = require('passport');

router.get('/getAll', controller.getAll);
router.get('/getById', controller.getById);

module.exports = router;