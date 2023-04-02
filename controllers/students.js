const db = require('../models');
const Student = db.student;


exports.createStudent = (req, res) => {
  // Validate request
  if (!req.body.emailAddress|| !req.body.lastName) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const student = new Student(req.body);
  student
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the student.'
      });
    });
};

exports.getAll = (req, res) => {
  Student.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving students.'
      });
    });
};

exports.getStudent = (req, res) => {
  const emailAddress = req.params.emailAddress;
  Student.find({ emailAddress: emailAddress })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving students.'
      });
    });
};