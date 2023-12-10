// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id1 = Symbol("123");
const id2 = Symbol(123);

console.log(id1)
console.log(id2)
console.log(id1 === id2)

// const bigNumber = 454923959444455n;

// Refernece (Non-Primitive)

// Array, Object, Functions

const fruits = ["apple", "banana", "orange"];

const muObj ={
    name: "Arvind",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Arvind");
}


// ++++++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++//

// Stack(Primitive) , Heap(Non-Primitive)

let userOneName = "Ravishankar";
let userTwoName= userOneName;
userTwoName = "RohanVerma";

console.log(userOneName)
console.log(userTwoName)

let userOne = {
    email: "user1@gmail.com",
    age: 22,
}

let userTwo = userOne;

userTwo.email = "user2@gamil.com";

console.log(userOne.email)
console.log(userTwo.email)