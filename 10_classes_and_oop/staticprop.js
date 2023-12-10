class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`User Name is :${this.userName}`);
  }

  static createId() {
    return `123`;
    // return `${this.name}`
  }
}

const userOne = new User("Arvind");

// console.log(userOne.createId())

class Teacher extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}

const schoolTeacher = new Teacher("Ravi raj", "raj@ravi.in");

// schoolTeacher.logMe();
console.log(schoolTeacher.createId())