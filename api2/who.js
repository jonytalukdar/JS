function randomName() {
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0];
      const name = user.name;
      const fullName = `${name.title} ${name.first} ${name.last}`;
      document.getElementById('who').innerText = fullName;
    });
}

setInterval(() => {
  randomName();
}, 2000);
