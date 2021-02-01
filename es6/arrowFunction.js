// function doubleIt(num) {
//   return num * 2;
// }

// let result = doubleIt(5);
// console.log(result);

const doubleIt = (num) => num * 5;
let result = doubleIt(5);
console.log(result);

const add = (n1, n2) => n1 + n2;

let sum = add(12, 12);
console.log(sum);

const give5 = () => 5;
let give = give5();
console.log(give);

const bishal = (x, y) => {
  const sum = x + y;
  const sub = x - y;
  const result = sum + sub;
  return result;
};

let bish = bishal(12, 5);
console.log(bish);
