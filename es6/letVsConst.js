var myName = 'joney talukdar';
myName = 'jerry talukdar';
console.log(myName);

let herName = 'jerry bean';
herName = 'jerry khan';
console.log(herName);

const himName = 'jabi kabi';
// himName = 'kabi jabi';  its a constant variable not changable
console.log(himName);

const numbers = [12, 34, 56, 78];
numbers[0] = 6;
numbers.push(12);
// numbers = [12, 12, 12, 12, 1, 2]; its whole array not changeble
console.log(numbers);

const actors = {
  name: 'jhonny dep',
  age: 31,
  phoneNumber: 729834740123,
};

actors.phoneNumber = 12121212121;
console.log(actors);

let patientsName = 'rahim cacha';
patientsName = 'rahima khala';
console.log(patientsName);

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += sum[i];
}
