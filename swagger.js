const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Oline Course Api',
    description: 'Students and Teachers Information'
  },
  host: 'lesson05-javier-espinoza.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
//  });
