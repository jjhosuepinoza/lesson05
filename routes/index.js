const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/students', require('./students'));
router.use('/teachers', require('./teachers'));

module.exports = router;
