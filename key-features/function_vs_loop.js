// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function add(num1, num2) {
//   var total = num1 + num2;
//   return total;
// }

// var result1 = add(12, 12);
// console.log(result1);

// console.log('this is very easy');
// console.log('this is also easy');

// var result2 = add(12, 34);
// console.log(result2);

function getLargestNum(Numbers) {
  var larger = Numbers[0];
  for (var i = 0; i < Numbers.length; i++) {
    var elements = Numbers[i];
    // console.log(elements);
    // return elements;
    if (elements > larger) {
      larger = elements;
    }
  }
  return larger;
}
var result = getLargestNum([12, 45, 34]);
console.log(result);
