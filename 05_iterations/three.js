// for of loop

// ["", "", ""];
// [{}, {}, {}];

const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
  // console.log(value);
}

const greetings = "Hello User !";
for (const greeting of greetings) {
  // console.log(greeting);
}

// Map
const map = new Map();
map.set("IN", "India");
map.set("USA", "Unite States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

const user = {
  name: "Arvind",
  age: 22,
  working: true,
};
for (const [key, value] of user) { // not iterable
  console.log(key, ":-", value);
}
