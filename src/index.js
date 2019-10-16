const five = require('johnny-five');
const EtherPort = require('etherport');

const board = new five.Board({
  id: '1',
  port: new EtherPort(3030),
  timeout: 10000
});

board.on('ready' , function() {
  const controller = "PCA9685";

  const base = new five.Servo({
    controller,
    pin: 0,
    startAt: 90
  });

  const low = new five.Servos([
    {
      controller,
      pin: 1,
      startAt: 120
    },{
      controller,
      pin: 2,
      startAt: 120,
      invert: true
    }
  ]);

  const mid = new five.Servo({
    controller,
    pin: 3,
    startAt: 25
  });

  const up = new five.Servo({
    controller,
    pin: 4,
    startAt: 120
  });

  const rotate = new five.Servo({
    controller,
    pin: 5,
    startAt: 150
  });

  this.repl.inject({
    base,
    low,
    mid,
    up,
    rotate
  });
});