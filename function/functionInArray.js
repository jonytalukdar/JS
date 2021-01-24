// let nums = [12, 34, 56, 78, 90, 43, 21];

// for (let i = 0; i < nums.length; i++) {
//   const element = nums[i];
//   if (element % 2 == 1) {
//     console.log(element, 'is a odd number');
//   } else {
//     console.log(element, 'is a even number');
//   }
// }

let friends = [12, 23, 21, 34, 45, 32, 22];

function addFriendsAge(age) {
  for (let i = 0; i < age.length; i++) {
    let ages = age[i];
    if (ages % 2 == 0) {
      console.log(ages, 'is a even number');
    } else {
      console.log(ages, ' is a odd number');
    }
  }
}

addFriendsAge(friends);
