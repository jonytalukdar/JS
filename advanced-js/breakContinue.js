const arr = [1, 2, 3, 4, 5, 6, 67, 87, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 5) {
    break;
  }
  console.log(arr[i]);
}

const con = [21, 345, 34, 64, 34, -56, -12];

for (let i = 0; i < con.length; i++) {
  if (con[i] < 0) {
    continue;
  }
  console.log(con[i]);
}
