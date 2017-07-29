var five = require("johnny-five");
var Particle = require("particle-io");
var board = new five.Board({
  io: new Particle({
    token: '078e4dd2473f6be7f4ad09682614577949c9c08a',
    deviceId: '24003e000147353138383138'
  })
});

board.on("ready", function() {
  console.log("Device Ready..");
  var led = new five.Led("D7");
  led.blink();
});
