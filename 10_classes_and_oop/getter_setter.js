class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `${this._email.toUpperCase()}`;
  }
  set email(emailValue) {
     this._email = emailValue.toLowerCase();
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}arvind${Math.floor(Math.random() * 10000 + 1)}`;
  }

  set password(passwordValue) {
    this._password = passwordValue;
  }
}

const userOne = new User("user@one.in", "1234");

console.log(userOne.email);
