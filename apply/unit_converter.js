// using variable

var inch = 130;
var feet = inch / 12;
console.log('feet: ', feet.toFixed(2));

// using function

function feetToInch(inch) {
  var feet = inch / 12;
  return feet;
}

var dadi = feetToInch(60);
console.log(dadi);

var dada = feetToInch(123);
console.log(dada);

var nani = feetToInch(154);
console.log(nani);
