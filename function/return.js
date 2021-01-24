// let num = [12, 21, 34, 32, 56, 54, 78, 87];
// let friendAges = [21, 23, 24, 31, 56, 54, 76, 87, 99];

// function evenify(num) {
//   if (num % 2 == 0) {
//     return num + ' is a even number';
//   } else {
//     return num + ' is a od number';
//   }
// }

function retured(num) {
  let result;
  if (num % 2 == 0) {
    result = num;
  } else {
    result = num;
  }
  return result;
}
var result = retured(3);
let power = Math.pow(result, 2);
console.log(power);
// let result = evenify(13);
// console.log(result);

// function evenifyAll(ages) {
//   for (let i = 0; i < ages.length; i++) {
//     const element = ages[i];
//     evenify(element);
//   }
// }

// evenifyAll(friendAges);
