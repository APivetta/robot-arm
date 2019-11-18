const arm = require('./arm');
const server = require('./server');

arm.initialize()
  .then(server.start);

