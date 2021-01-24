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
