// ES6

// class User {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }

//   eccryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const userOne = new User("Arvind", "abc@gmail.com", "12345");

// console.log(userOne.eccryptPassword());
// console.log(userOne.changeUserName());

// behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.eccryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const userOne = new User("Arvind", "abc@gmail.com", "12345");

console.log(userOne.eccryptPassword());
console.log(userOne.changeUserName());