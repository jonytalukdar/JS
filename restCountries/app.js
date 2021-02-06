const baseApi = 'https://restcountries.eu/rest/v2/name/';

function getCountyName(city) {
  const url = `https://restcountries.eu/rest/v2/name/${city}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getCountyName('saudi');
