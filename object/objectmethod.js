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

normalPerson.getFullName();
const result = normalPerson.chargeBill(10000);
console.log(result);
