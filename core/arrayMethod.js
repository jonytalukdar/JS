const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const product = [
  {
    id: 1,
    name: 'laptop',
    brand: 'hp',
    price: 1234,
  },
  {
    id: 2,
    name: 'phone',
    brand: 'apple',
    price: 13,
  },
  {
    id: 3,
    name: 'watch',
    brand: 'rolex',
    price: 12344,
  },
];

//  map
const numberArray = number.map((value) => value);
console.log(numberArray);
const productName = product.map((value) => {
  return Math.pow(value.price, 2);
});
console.log(productName);

// forEach
product.forEach((product) => {
  const result = product;
  console.log(result);
});

//  filter
const cheapPrice = product.filter((value) => {
  return value.price < 100;
});
console.log(cheapPrice);

const not3 = product.filter((value) => {
  if (value.id !== 2) {
    return value;
  }
});
console.log(not3);

//  find
const finded = product.find((value) => value.id === 3);
console.log(finded);
