let bonus = 12;

function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    const mood = 'haappy';
    console.log(mood);
  }
  return result;
}

const sumAll = sum(1, 1);
console.log(sumAll);

// console.log(result);
