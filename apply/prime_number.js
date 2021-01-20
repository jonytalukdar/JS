// var n = 19;
// for (var i = 2; i < n - 1; i++) {
//   console.log(n % i);
//   if (n % i == 0) {
//     console.log(n, ' is not a prime a number');
//   } else {
//     console.log(n, 'is a prime number');
//   }
// }

function isPrime(n) {
  if (n % 2 == 0) {
    return n + ' is not a prime number';
  } else {
    return n + ' is a prime number';
  }
}

var result = isPrime(12);
console.log(result);
