const normalPerson = {
  firstName: 'joney',
  lastName: 'talukdar',
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName + this.lastName);
  },
  chargeBill: function (amount, tax, tips) {
    this.salary -= amount + tax + tips;
    return this.salary;
  },
};

const heroPerson = {
  firstName: 'hero',
  lastName: 'alam',
  salary: 12000,
};

const boringPerson = {
  firstName: 'jerry',
  lastName: 'bean',
  salary: 10000,
};

// normalPerson.chargeBill.call(heroPerson, 2000, 1000, 500);
// normalPerson.chargeBill.call(boringPerson, 2000, 1200, 1000);
// console.log(heroPerson.salary);
// console.log(boringPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [2000, 1000, 5000]);
normalPerson.chargeBill.apply(boringPerson, [1200, 1000, 1000]);
console.log(heroPerson.salary);
console.log(boringPerson.salary);
