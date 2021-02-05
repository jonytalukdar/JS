class Person {
  constructor(firstName, lastName, salary) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.salary = salary);
  }
}

const heroPerson = new Person('joney', 'talukdar', 12000);
console.log(heroPerson);

const boringPerson = new Person('roney', 'talukdar', 300000);
console.log(boringPerson);

// old version of class

function PersonOld(firstName, lastName, salary) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.salary = salary);
}

const oldMan = new PersonOld('grand', 'pappa', 1200);
console.log(oldMan);
