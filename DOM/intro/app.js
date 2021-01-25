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

// using queryselector

let specials = document.querySelectorAll('.special h3');

for (let i = 0; i < specials.length; i++) {
  let element2 = specials[i];
  element2.style.backgroundColor = 'blue';
  element2.style.color = 'white';
  element2.style.fontSize = '30px';
  element2.style.borderRadius = '20px';
  element2.style.textAlign = 'center';
}

//  added some element

let article = document.getElementById('first-article');
let newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is added by javascript';
article.appendChild(newParagraph);

// added element

let list = document.querySelector('article ul');
let newList = document.createElement('li');
newList.innerHTML = 'list-item-6';
list.appendChild(newList);

// add event

function handClick() {
  alert(new Date());
}

// add event listener

let secondButton = document.getElementById('second-button');
secondButton.onclick = handClick;
secondButton.addEventListener('click', handClick);

document.getElementById('last-button').addEventListener('click', function () {
  document.body.style.color = 'red';
});
