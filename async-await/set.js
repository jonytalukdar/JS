function doSomething() {
  console.log('doo');
}

console.log('first');
console.log('second');
console.log('third');
setTimeout(doSomething, 2000);
setTimeout(function () {
  console.log('very lazy');
}, 3000);
setTimeout(() => {
  console.log('its too lazy');
}, 4000);
console.log('fourth');
console.log('sixth');
