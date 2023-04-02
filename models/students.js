module.exports = (mongoose) => {
    const Students = mongoose.model(
      'students',
      mongoose.Schema(
        {
            "_id": {
              "type": "ObjectId"
            },
            "firstName": {
              "type": "String"
            },
            "lastName": {
              "type": "String"
            },
            "age": {
              "type": "Number"
            },
            "emailAddress": {
              "type": "String"
            },
            "phoneNumber": {
              "type": "String"
            },
            "studentStatus": {
              "type": "String"
            },
            "emergencyName": {
              "type": "String"
            },
            "emergencyPhone": {
              "type": "String"
            }
          })
    );

return Students;

};