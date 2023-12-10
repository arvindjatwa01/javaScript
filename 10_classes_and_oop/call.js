function setUserName(username) {
  // complex DB calls
  this.username = username;

  console.log(`this in setUser : ${this.username}`);

}

function createUser(userName, email, password){
    setUserName.call(this, userName);
    this.email = email;
    this.password = password;
}

const userOne = new createUser("Arvind", "user@arvind.in", "1234");

console.log(userOne);