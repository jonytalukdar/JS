const students = [
  {
    id: 21,
    name: 'joneey talukdar',
  },
  {
    id: 23,
    name: 'jerry talukdar',
  },
  {
    id: 12,
    name: 'Jubayer talukdar',
  },
  {
    id: 32,
    name: 'Roney talukdar',
  },
];

// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
//   console.log(element);
// }

const result = students.map(function (value) {
  return value.id;
});
console.log(result);

const filtered = students.filter(function (value) {
  if (value.id > 21) {
    return value;
  }
});
console.log(filtered);
