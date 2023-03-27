const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('teachers').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('teachers').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createTeacher = async (req, res) => {
  const teacher = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber,
    availability: req.body.availability,


  };
  const response = await mongodb.getDb().db().collection('teachers').insertOne(teacher);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the teacher.');
  }
};

const updateTeacher = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const teacher = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber,
    availability: req.body.availability,
    
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('teachers')
    .replaceOne({ _id: userId }, teacher);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the teacher.');
  }
};

const deleteTeacher = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('teachers').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
