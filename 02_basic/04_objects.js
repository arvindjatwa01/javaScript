// const instaUser = new Object(); // Singleton Object
const instaUser = {}; // non-singleton Object

instaUser.id = "001A98";
instaUser.name = "rokingStar";
instaUser.isLoggedIn = false;

// console.log(instaUser);

const regularUser = {
  email: "rockingStar@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Arvind",
      lastName: "Jatwa",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(instaUser)

// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

// console.log(instaUser.hasOwnProperty("name"))
// console.log(instaUser.hasOwnProperty("email"))

const course  = {
  courseName: "JavaScript",
  price: 899,
  courseLanguage: "hindi",
};

const {courseLanguage: language} = course;

console.log(language)