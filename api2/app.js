function findTask() {
  fetch('https://www.boredapi.com/api/activity')
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('activity').innerText = data.activity;
    });
}

setInterval(() => {
  findTask();
}, 2000);
