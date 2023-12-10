let myName = "Arvind     ";
let mySurname = "Jatwa     ";

// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  spiderman: "sling",
  thor: "hammer",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.arvind = function () {
  console.log(`arvind is present in all objects.`);
};

Array.prototype.heyUser = function(){
    console.log("Welcome user.")
}

// heroPower.arvind();
myHeros.arvind();
myHeros.heyUser();
// heroPower.heyUser();

// inheritence


const User = {
    name: "userOne",
    email: "userone@google.com",
}


const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssigment: "JS Assigment",
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

// console.log(TASupport.isAvailable);

// moder syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "SanjayJatwa           ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.trueLength();