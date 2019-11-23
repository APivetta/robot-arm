const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./logger')('server');

const PORT = process.env.PORT || 8080;
const server = express();

server.use(cors());
server.use(bodyParser.json());

const moveArm = (servos, movement) => {
  const moveIfValid = (servoName) => {
    if (Number.isInteger(movement[servoName]) && movement[servoName] >= 0 && movement[servoName] <= 180) {
      servos[servoName].to(movement[servoName]);
    }
  };

  moveIfValid('base');
  moveIfValid('low');
  moveIfValid('mid');
  moveIfValid('up');
  moveIfValid('rotate');
  moveIfValid('claw');
};

const start = (servos) => {
  server.post('/move', (req, res) => {
    const body = req.body;
    logger.info('Got movement request %j', body);

    moveArm(servos, body)

    res.json({
      message: 'moving...'
    });
  });

  server.get('/status', (req, res) => {
    const {
      base,
      low,
      mid,
      up,
      rotate,
      claw
    } = servos;

    res.json({
      base: base.value,
      low: low[0].value,
      mid: mid.value,
      up: up.value,
      rotate: rotate.value,
      claw: claw.value
    });
  });


  server.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server listening at ${PORT}`);
  });
};

module.exports = {
  start
};