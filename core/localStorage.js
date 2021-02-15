//  json converter

// const per = JSON.stringify(person);
// console.log(per);
// const parse = JSON.parse(per);
// console.log(parse);

// api fetch
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//  localStorage vs sessionStorage

// localStorage.setItem('userId', 12);
// localStorage.setItem('name', 'JOney');
// const user = localStorage.getItem('name', 'JOney');
// console.log(user);

const person = {
  name: 'jery',
  age: 21,
  city: 'tangail',
  address: ['tangail', 'bashail', 'moytha'],
};

const store = localStorage.setItem('perosn', JSON.stringify(person));

const parsed = localStorage.getItem(JSON.parse(store));
console.log(parsed);
