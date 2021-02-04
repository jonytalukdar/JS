const normalPerson = {
  firstName: 'joney',
  lastName: 'talukdar',
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName + this.lastName);
  },
  chargeBill: function (amount) {
    this.salary -= amount;
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
  salary: 12000,
};

// normalPerson.chargeBill();
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(2000);

console.log(normalPerson.salary);
