// const userEmail = "arvind@dev.in";

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email.");
// }

// ===================== falsy values ==================== //

// false, 0, -0, BigInt 0n, "", null, undefined,  NaN

// ********************** truthy values ****************** //

// "0", 'false', " ", [], {}, function(){}

const userEmailArray = [];
// if(userEmailArray.length === 0){
//     console.log("Array is Empty.");
// }

const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object  is Empty.");
// }

// console.log(false == 0); // true
// console.log(false == ""); // true 
// console.log(0 == ""); // true 
// console.log(false === 0); // false
// console.log(false === ""); // false
// console.log(0 === ""); // false

// ++++++++++++++++++++++++ Nullish Coalescing Operator (??): null undefined ++++++++++++++++++++++++ //

let val1;

// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; //10
// val1 = undefined ?? 15; //15

val1 = null ?? 10 ?? 20; // 10

// console.log(val1)

// +++++++++++++++++++++++++ Terniary Operator +++++++++++++++++++++++++++ //

// condition ? true : false;

const iceTeatPrice = 100;

iceTeatPrice >=80 ? console.log("greate then 80") : console.log("less then 80");