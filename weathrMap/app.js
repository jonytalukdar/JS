const apiKey = '08d1ff27ba3f8236c3b68e4278207732';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

function getTemp(city) {
  const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => updataUi(data));
}
const serchButton = document.getElementById('search-button');
serchButton.addEventListener('click', function () {
  const cityName = document.getElementById('city').value;
  getTemp(cityName);
});

function updataUi(data) {
  document.getElementById('show-city').innerText =
    data.name || 'Unknown Location';
  document.getElementById('show-temp').innerText = data.main.temp;
  document.getElementById('visibility').innerText = data.clouds.all;
}

getTemp('Dhaka');
