const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// console.log(Math.PI);

// Math.PI = 5;

// console.log(Math.PI);

// const myNewObj = Object.create(null);

const userObj = {
  name: "User",
  score: 199,
  isOnline: true,

  userLogout: function(){
    console.log("User logout.")
  }
};

console.log(Object.getOwnPropertyDescriptor(userObj, "name"));
// console.log(userObj);

Object.defineProperty(userObj, "name", {
    writable: false,
    enumerable: true,
    //   configurable: true,
});

// console.log(Object.getOwnPropertyDescriptor(userObj, "name"));

userObj.name = "Rohan Verma";

console.log(userObj);

for (const [key, value] of Object.entries(userObj)) {
    if(typeof value !== `function`){
        console.log(`${key} : ${value}`);
    }
}