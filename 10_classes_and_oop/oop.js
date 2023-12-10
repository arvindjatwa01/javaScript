const user = {
  userName: "Arvind",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    console.log(`Username : ${this.userName}`);
  },
};

// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this);

function User(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("Arvind", 12, true);
const userTwo = new User("Sanjay", 23, false);

console.log(userOne.constructor);
// console.log(userTwo);
