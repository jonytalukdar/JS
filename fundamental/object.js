var students = {
  id: 1,
  name: 'Joney Talukdar',
  hobbies: ['music', 'movies', 'codding', 'singing'],
  phone: 0123432242134,
  address: [],
};

//do notation
console.log(students.name);
console.log(students.hobbies[2]);
//array notation
students.id = 2;
console.log(students['id']);

var phoneNo = 'phone';
console.log(students[phoneNo]);
