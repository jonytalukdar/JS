// local variable

function myTodo(task) {
  const newTaskElement = document.createElement('li');
}

// global variable

let myName = 'Joney Talukdar';

function addUser() {
  let romanticName = 'jantoss';
  console.log(romanticName);
  console.log(myName);
}

addUser();

(function () {
  console.log('hey');
})();
// function expression

//   function add() {
//     console.log('this is iife function');
//   }
// )();

let functionName = function () {
  console.log('this is functiono expression');
};
functionName();
