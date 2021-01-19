// multi = 1;
// for (var i = 1; i <= 4; i++) {
//   multi *= i;
// }
// console.log(multi);

function factorial(n) {
  var multi = 1;
  for (var i = 1; i < n; i++) {
    multi *= i;
  }
  return multi;
}

var result = factorial(10);
console.log(result);
