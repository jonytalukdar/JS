function addNumber(num1, num2) {
  return num1 + num2;
}
let add = addNumber(12, 12);
console.log(add);

// using arguments

function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    let element = arguments[i];
    if (element % 2 == 0) {
      sum += element;
    }
  }
  function info(message) {
    console.log(message);
  }
  info('Good Morning');
  return sum;
}

let result = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
