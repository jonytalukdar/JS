var teaLine = ['kalam', 'salam', 'balam', 'jamal'];
// teaLine.push('jalam');
// teaLine.pop();
// teaLine.unshift('Joney talukdar');
// teaLine.shift();
// console.log(teaLine);
var sliced = teaLine.slice(1);
console.log(teaLine);
console.log(sliced);
var result = teaLine.splice(1, 1);
console.log(result);

var month = ['jan', 'march', 'may', 'july'];
month.splice(1, 0, 'feb');
month.splice(3, 0, 'apr');
month.splice(5, 0, 'jun');
console.log(month);
