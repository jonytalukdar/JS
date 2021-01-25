// let items = document.getElementsByClassName('item');

// for (let i = 0; i < items.length; i++) {
//   const item = items[i];
//   item.addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document.getElementById('addNew').addEventListener('click', function (event) {
  let itemParent = document.getElementById('myList');
  let newItem = document.createElement('li');
  newItem.innerHTML = 'Brand New item';
  itemParent.appendChild(newItem);
});

// document
//   .getElementById('first-list')
//   .addEventListener('click', function (event) {
//     console.log('I have been clicked');
//     event.stopPropagation();
//   });

// document
//   .getElementById('container')
//   .addEventListener('click', function (event) {
//     console.log('container clicked');
//   });

document.getElementById('myList').addEventListener('click', function (event) {
  event.target.parentNode.removeChild(event.target);
});
