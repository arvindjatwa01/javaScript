// if
const isUserLoggedIn = true;

// if(isUserLoggedIn){

// }

const tempture = 45;
// if(tempture === 40){
//     console.log("tempture is less than 45");
// }else{
//     console.log("tempture is greater than 45.");
// }

// <, >, <=, >=, ==, !=, ===, !==,

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2"); don't do like this

// if (balance < 500) {
//   console.log("less than 500.");
// } else if (balance < 750) {
// } else if (balance < 900) {
//   console.log("less than 900.");
// } else {
//   console.log("less than 1200.");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmial = true;

if (userLoggedIn && debitCard  && 2==3) {
  console.log("allow to buy courses.");
}

if(loggedInFromGoogle || loggedInFromEmial){
    console.log("User logged in");
}
