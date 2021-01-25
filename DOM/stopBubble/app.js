document
  .getElementById('first-list')
  .addEventListener('click', function (event) {
    console.log('I have been clicked');
    event.stopPropagation();
  });

document
  .getElementById('container')
  .addEventListener('click', function (event) {
    console.log('container clicked');
  });

document.getElementById('myList').addEventListener('click', function (event) {
  console.log('myList clicked');
});
