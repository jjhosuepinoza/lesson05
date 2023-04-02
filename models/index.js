const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.student = require('./students.js')(mongoose);
db.teacher = require('./teachers.js')(mongoose);

module.exports = db;