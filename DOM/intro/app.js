let authors = document.getElementsByClassName('author');

for (let i = 0; i < authors.length; i++) {
  let element = authors[i];
  element.style.backgroundColor = 'red';
  element.style.fontSize = '30px';
  element.style.borderRadius = '20px';
  element.style.textAlign = 'center';
  element.style.margin = '20px';
  element.style.padding = '40px';
  element.innerHTML = 'lekhok - ' + (i + 1);
}

let specials = document.querySelectorAll('.special h3');

for (let i = 0; i < specials.length; i++) {
  let element2 = specials[i];
  element2.style.backgroundColor = 'blue';
  element2.style.color = 'white';
  element2.style.fontSize = '30px';
  element2.style.borderRadius = '20px';
  element2.style.textAlign = 'center';
}
