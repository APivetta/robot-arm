const five = require('johnny-five');
const EtherPort = require('etherport');

const initialize = () => {
  const board = new five.Board({
    id: '1',
    port: new EtherPort(3030),
    timeout: 10000
  });

  return new Promise((resolve) => {
    board.on('ready', function () {
      const controller = "PCA9685";
  
      const base = new five.Servo({
        controller,
        pin: 0,
        invert: true,
        startAt: 0
      });
  
      const low = new five.Servos([{
        controller,
        pin: 1,
        startAt: 120,
        invert: true
      }, {
        controller,
        pin: 2,
        startAt: 120,
      }]);
  
      const mid = new five.Servo({
        controller,
        pin: 3,
        startAt: 50
      });
  
      const up = new five.Servo({
        controller,
        pin: 4,
        startAt: 0
      });
  
      const rotate = new five.Servo({
        controller,
        pin: 5,
        startAt: 0
      });
  
      const claw = new five.Servo({
        controller,
        pin: 6,
        startAt: 30
      });
      
      const servos = {
        base,
        low,
        mid,
        up,
        rotate,
        claw
      };

      this.repl.inject(servos);
      resolve(servos);
    });
  })

};

module.exports = {
  initialize
}