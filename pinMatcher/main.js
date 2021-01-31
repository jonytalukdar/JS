function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + '').split('.')[0];
  console.log(typeof pin);
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

// display gerated pin

function genaratedPin() {
  const pinInput = document.getElementById('show-pin');
  pinInput.value = getPin();
}

// handle calculator

const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    if (digit === 'C') {
      const typedInput = document.getElementById('typed-pin');
      typedInput.value = '';
    }
  } else {
    const typedInput = document.getElementById('typed-pin');
    typedInput.value += digit;
  }
});

function verifyPin() {
  const pin = document.getElementById('show-pin').value;
  const typedInput = document.getElementById('typed-pin').value;

  if (pin === typedInput) {
    displayMath('block', 'none');
  } else {
    displayMath('none', 'block');
  }
}

function displayMath(correct, incorrect) {
  const matched = document.getElementById('matched');
  matched.style.display = correct;
  const notMatched = document.getElementById('not-matched');
  notMatched.style.display = incorrect;
}
