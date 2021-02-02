let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let output = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   const power = Math.pow(element, 2);
//   output.push(power);
// }
// console.log(output);

// const newArr = arr.map((value) => value * value);

// console.log(newArr);

const result = arr.filter((value) => value < 5);
console.log(result);
