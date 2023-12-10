class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USERNAME is ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.userName}`);
  }
}

const userOne = new Teacher("Arvind", "abc@gmail.com", "1234");
userOne.addCourse();
userOne.logMe();

const userTwo = new User("Rohan Verma");
userTwo.logMe();

console.log(userOne === userTwo);
console.log(userOne === Teacher);
console.log(userOne === User);

// console.log(userOne instanceof userTwo);
console.log(userOne instanceof Teacher);
console.log(userOne instanceof User);