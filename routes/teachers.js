const express = require('express');
const router = express.Router();

const teachersController = require('../controllers/teachers');

router.get('/', teachersController.getAll);

router.get('/:emailAddress', teachersController.getTeacher);

router.post('/', teachersController.createTeacher);

// router.put('/:emailAddress', teachersController.updateTeacher);

// router.delete('/:emailAddres', teachersController.deleteTeacher);

module.exports = router;
