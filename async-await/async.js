// function loadData() {
//   fetch('https://jsonplaceholder.typicode.com/users/')
//     .then((response) => response.json())
//     .then((data) => displayData(data));
// }

// loadData();

function displayData(data) {
  const parentNode = document.getElementById('my-list');
  for (let i = 0; i < data.length; i++) {
    const user = data[i];
    const item = document.createElement('li');
    item.innerText = user.name;
    parentNode.appendChild(item);
  }
}

// async function hello(name) {
//   return 'Hello ' + name;
// }

// const result = hello('jerry');
// result.then((responce) => console.log(responce));

async function loadData() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await responce.json();
  return data;
}

loadData().then((data) => displayData(data));
