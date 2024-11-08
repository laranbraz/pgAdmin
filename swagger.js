const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/index.js', './src/routes/*.js'];

const doc = {
  info: {
    title: 'Admin',
    description: 'API admin',
    version: '1.0.0'
  },
  host: 'localhost:3001',
  basePath: '/',
  schemes: ['http']
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./src/index');
});

