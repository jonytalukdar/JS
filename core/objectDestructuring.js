// array destructuring
const numbers = [12, 32];
// const first = numbers[0];
// const second = numbers[1];

// shortcut way
// const [first, second] = [12, 32];
const [first, second] = numbers;
console.log(first, second);

function boxify(num) {
  return [num, num + 5];
}
const [box1, box2] = boxify(12);
console.log(box1, box2);

// object desstructuring

const { id, name, age } = { id: 1, salary: 12000, name: 'joney', age: 21 };

// console.log(person.name, person.age);
// console.log(person.name, person.age);
// console.log(person.name, person.age);
console.log(id, name, age);

// create object shorcut

const x = 12;
const y = 23;
const obj = { x, y };
console.log(obj);

// three dots for create new array
const newNumbers = [...numbers, 45];
console.log(newNumbers);
