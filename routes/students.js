const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');
const{validateCreate} = require('../validator/client')
router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post('/', validateCreate, studentsController.createStudent);

router.put('/:id',validateCreate, studentsController.updateStudent);

router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
