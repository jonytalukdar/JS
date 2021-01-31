function getFullName() {
  console.log(arguments);
  var fullName = ' ';
  for (let i = 0; i < arguments.length; i++) {
    let element = arguments[i];
    fullName += ' ' + element;
  }
  return fullName;
}

let result = getFullName('joney', 'roney', 'jerry', 'jubayer', 'talukdar');
console.log(result);
