function isLeapyear(year) {
  if (year / 4 == 0) {
    console.log(year, ' is a leap year');
  } else if (year / 100 == 0) {
    console.log(year, ' is a leap year');
  } else if (year / 400 == 0) {
    console.log(year, ' is a leap year');
  } else {
    console.log(year, ' is not a leap year');
  }
}

isLeapyear(2021);
