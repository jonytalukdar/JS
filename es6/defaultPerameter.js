function add(num1, num2 = 0) {
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  //   num2 = num2 || 0;
  return num1 + num2;
}

let result = add(12, 12);
console.log(result);
