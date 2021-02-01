const arr = [12, 32, 34, 54, 23, 22, 23, 24];
const arr2 = [21, 34, 21, 22, 23, 3, 4];
const arr3 = [32, 54, 76, 89, 65, 42];
const arrAll = arr.concat(arr2).concat([5]).concat(arr3);
const arrAll2 = [...arr, 2, ...arr2, ...arr3, 5];
// console.log(arrAll2);

// another example

// const business = 4325;
// const minister = 2311;
// const sochid = 34234;
// const maxNumbe = Math.max(business, minister, sochid);
// console.log(maxNumbe);

const taka = [12, 45, 312, 56, 23, 1, 456];
const maxTaka = Math.max(...taka);
console.log(maxTaka);
