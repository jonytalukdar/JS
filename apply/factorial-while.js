// var i = 1;

// var fact = 1;

// while (i <= 10) {
//   fact *= i;
//   console.log(i, fact);
//   i++;
// }

var i = 1;
function factorial(n) {
  multi = 1;
  while (i <= n) {
    multi *= i;
    // console.log(multi);
    i++;
  }
  return multi;
}

var result = factorial(10);
console.log(result);
