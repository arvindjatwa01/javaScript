// Singleton
// Object.create // this  is called constructor method

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Arvind",
    "full Name": "Arvind Jatwa",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "Code@gmail.in",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Thuesay", "Wednesday"]
};

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.age = 22;
// Object.freeze(JsUser); //  freeze the object by use it we can't change the object keys values
Object.age = 20;
// console.log(JsUser);

JsUser.welcome = function(){
    console.log("Welcome JS User")
}

JsUser.welcomeUser = function(){
    console.log(`Welcome JS User, ${this["full Name"]}`)
}

console.log(JsUser.welcomeUser())

