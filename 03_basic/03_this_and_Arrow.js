const user = {
  userName: "Arvind",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website.`);
    // console.log("this :: ", this);
  },
};

// console.log(user.welcomeMessage)
// user.welcomeMessage();
// user.userName = "Rohan Verma";
// user.welcomeMessage();

// console.log(this)

// function callThisMethod(){
//     let userName= "arvind";
//     console.log(this.userName); // undefined
// }

// const callThisMethod = function () {
//   let userName = "arvind";
//   console.log(this.userName); // undefined
//   console.log(this.userName); // undefined
// };

// const callThisMethod = () => {
//   let userName = "arvind";
//   console.log(this); // undefined
// };
// callThisMethod();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({userName: "Rohan Verma"})
console.log(addTwo(2, 5));
