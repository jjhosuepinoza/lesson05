module.exports = (mongoose) => {
  const teacherSchema =  mongoose.Schema({
    
      _id: {
        type: 'ObjectId'
      },
      firstName: {
        type: 'String'
      },
      lastName: {
        type: 'String'
      },
      age: {
        type: 'Number'
      },
      emailAddress: {
        type: 'String'
      },
      phoneNumber: {
        type: 'String'
      },
      availability: {
        type: [mongoose.SchemaTypes.Mixed]
      }
    });

  return mongoose.model('teachers', teacherSchema)
};
