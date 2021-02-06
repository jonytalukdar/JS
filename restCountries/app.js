const baseApi = 'https://restcountries.eu/rest/v2/name/';

function getCountyName(city) {
  const url = `https://restcountries.eu/rest/v2/name/${city}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data[0].name));
}

// added button handler

document.getElementById('search-button').addEventListener('click', function () {
  const cityName = document.getElementById('input').value;
  getCountyName(cityName);
});

function updateUI(data) {}
