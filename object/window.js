const myName = 'joney'; // this is global scope

function add(n1, n2) {
  let result = n1 + n2;
  console.log(myName); // this is global scope
  console.log(result);
  function double(num) {
    const total = num * n2;
    return total;
  }
  const doubleResult = double(4);
  console.log(doubleResult);

  return result;
}
// console.log(result); this is not global scope
let sum = add(12, 12);
console.log(sum);
