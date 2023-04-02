const db = require('../models');
const Teacher = db.teacher;


exports.createTeacher = (req, res) => {
  // Validate request
  if (!req.body.emailAddress|| !req.body.lastName) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const teacher = new Teacher(req.body);
  teacher
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the teacher.'
      });
    });
};

exports.getAll = (req, res) => {
  Teacher.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving teachers.'
      });
    });
};

exports.getTeacher = (req, res) => {
  const emailAddress = req.params.emailAddress;
  Teacher.find({ emailAddress: emailAddress })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving teachers.'
      });
    });
};