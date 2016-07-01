var mraa = require("mraa");

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_OUT);

var state = false;

function toggle(){
  state = !state;
  pin13.write(state ? 1 : 0);
  console.log(state ? 1 : 0);
  setInterval(toggle,500);
}

toggle();
