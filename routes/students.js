const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');

router.get('/', studentsController.getAll);

router.get('/:emailAddress', studentsController.getStudent);

router.post('/', studentsController.createStudent);

// router.put('/:emailAddress', studentsController.updateStudent);

// router.delete('/:emailAddress', studentsController.deleteStudent);

module.exports = router;
