const baseApi = 'https://restcountries.eu/rest/v2/name/';

async function getCountyName(city) {
  const responce = await fetch(`${baseApi}${city}`);
  const data = await responce.json();
  updateUI(data);
}

// added button handler

document.getElementById('search-button').addEventListener('click', function () {
  const cityName = document.getElementById('input').value;
  getCountyName(cityName);
});

// function for update UI
function updateUI(data) {
  document.getElementById('title').innerText = data[0].name;
  document.getElementById('capital').innerText = data[0].capital;
  document.getElementById('population').innerText = data[0].population;
  document.getElementById('region').innerText = data[0].region;
  document.getElementById('alt').innerText = data[0].altSpellings[1];
  document.getElementById('language').innerText = data[0].languages[0].name;
  document.getElementById('native').innerText = data[0].languages[0].nativeName;
}
