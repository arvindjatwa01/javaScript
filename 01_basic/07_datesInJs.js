// Dates
const date = new Date();
// console.log("toString :: =>",date.toString());
// console.log(typeof date);
// console.log("toDateString :: =>",date.toDateString());
// console.log("toISOString :: =>",date.toISOString());
// console.log("toJSON :: =>",date.toJSON());
// console.log("toLocaleDateString :: =>",date.toLocaleDateString());
// console.log("toTimeString :: =>",date.toTimeString());
// console.log("toUTCString :: =>",date.toUTCString());

// let createdDate = new Date(2024, 0, 25);
// let createdDate = new Date(2024, 0, 25, 9, 23);
// let createdDate = new Date("2023-09-20");
let createdDate = new Date("09-12-2098");
// console.log(createdDate.toLocaleString());

let timesTamp = Date.now();
// console.log(timesTamp);
// console.log(createdDate.getTime())
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

let myDate = newDate.toLocaleDateString('default', {
    year: "2-digit"
});

console.log(myDate);