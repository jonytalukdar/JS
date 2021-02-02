const user = {
  id: 21,
  name: 'Joney Talukdar',
  friendsName: ['shimul', 'akash', 'rashedul'],
  friendsAge: [12, 13, 14, 1, 5, 21, 23],
  bestFriend: {
    name: 'shimul',
    age: 22,
    lover: null,
  },
};
// {"id" : 21, "name" : "joney talukdars"}

const JsonName = JSON.stringify(user);
console.log(JsonName);
const FromJson = JSON.parse(JsonName);
console.log(FromJson);
