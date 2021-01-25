document
  .getElementById('first-list')
  .addEventListener('click', function (event) {
    console.log('I have been clicked');
  });

document
  .getElementById('container')
  .addEventListener('click', function (event) {
    console.log('container clicked');
  });

document.getElementById('myList').addEventListener('click', function (event) {
  console.log('myList clicked');
});
