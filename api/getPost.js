fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => displayUsers(json));

function displayUsers(users) {
  const usersName = users.map((user) => user.username);
  const ul = document.getElementById('users-container');

  for (let i = 0; i < usersName.length; i++) {
    const user = usersName[i];
    const li = document.createElement('li');
    li.innerText = user;
    ul.appendChild(li);
  }
}
