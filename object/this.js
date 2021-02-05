const myObject = {
  name: 'Joney talukdar',
  getFullName: function () {
    console.log(this);
    return this.name;
  },
};

const anotherObject = {
  name: 'Biddut Ali',
};
anotherObject.getFullName = myObject.getFullName;
// console.log(myObject.getFullName());
// console.log(anotherObject.getFullName());
myObject.getFullName();
anotherObject.getFullName();

// const result = myObject.getFullName();
// console.log(result);

function add(a, b) {
  console.log(this);
  return a + b;
}
add(12, 12);

anotherObject.sum = add;
anotherObject.sum();

setTimeout(() => {
  console.log(this);
}, 2000);
