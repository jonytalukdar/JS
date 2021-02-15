//   variable = let , const
let money = 3212;
money = 1243;
const myName = 'Joney Talukdar';
const statement = `this person ${myName} `;
const person = {
  name: 'joney talukdar',
  age: 21,
  city: 'tangail',
};
const result = `this person ${person.name} , he is ${person.age} and he lives in ${person.city}`;
console.log(result);

// condition
if (money > 20 && person.age >= 21) {
  console.log('he is perfect for this statement');
} else {
  console.log('he is not to be accepted');
}

// array
const numbers = [21, 43, 65, 87, 12, 65, 12, 73];
const people = ['jerry ', 'joney ', 'jubayer', 'roney ', 'talukdar'];
const products = [
  {
    name: 'laptop',
    brand: 'hp',
    price: 333,
    manufacture: 'italy',
  },
  {
    name: 'phone',
    brand: 'samsung',
    price: 111,
    manufacture: 'chine',
  },
  {
    name: 'monitor',
    brand: 'toshiba',
    price: 431,
    manufacture: 'bangadesh',
  },
];

// loop = for loop , while loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// function / function / arrow function

function add(n1, n2) {
  return n1 + n2;
}
const sum = add(21, 12);
console.log(sum);

const add2 = (num1, num2) => num1 + num2;
const sum2 = add2(12, 12);
console.log(sum2);
