const User = {
  _email: "user@gmail.in",
  _password: "12345arvind",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    return (this._email = value);
  },
};

// console.log(User.email);

const userTwo = Object.create(User);

console.log(userTwo.email);