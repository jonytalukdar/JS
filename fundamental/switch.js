var date = new Date();

var today = date.getDay();

switch (today) {
  case 0:
    console.log('today is sunday');
    break;

  case 1:
    console.log('today is monday');
    break;

  case 2:
    console.log('today is monday');
    break;

  case 3:
    console.log('today is monday');
    break;

  case 4:
    console.log('today is monday');
    break;

  case 5:
    console.log('today is monday');
    break;

  case 6:
    console.log('today is monday');
    break;
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;

  case 'Mangoes':
    console.log('Mongoes is my favourite fruits');
    break;

  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;

  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
