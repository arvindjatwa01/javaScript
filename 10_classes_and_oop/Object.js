function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 5;

console.log(multipleBy5(4));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const userOne = new createUser("Rohan", 20);
const userTwo = new createUser("Sohan", 50);

userOne.printMe();
userTwo.printMe();

/* 

Here's what happes behind the scence when the new keyword is used: 

1. A new Object is created: The new Keyword initiates the creation of a new JavaScript object.


2. A prototype is linked: The newly creaetd object gets linked to the prototype of the constructor function.This 
means that it has access to properties and methods defined on the constructor's prototype.


3. The constructor is called: The constructor functions is called with the specified arguments and this is bound 
to the newly created object. If no explicit return value is specified from the constructor, JavaScript assume 
this, the newly created object, to be the intended return value.

4. The new Object is returned: After the constructor function has been called,if t doesn't return a non-primitive
value (object, array, function, etc.), the newly created object is returned.


*/
