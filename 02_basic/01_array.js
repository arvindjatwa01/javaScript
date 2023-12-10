// Array

const myArr = [0, 1, 2, 3, 4, 5];

const myPlayers= ["MS", "Virat", "Rohit", "KL"];

const myArr2 = new Array(1,4,6,23,24);
// console.log(myArr[3]);

// Array Methods
// myArr.push(42);
// myArr.push(23);
// myArr.pop();
// myArr.unshift(109);
// myArr.shift();

// console.log(myArr.includes(13));
// console.log(myArr.indexOf(35))

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log("type of myArr :: ",typeof myArr);
// console.log("type of newArr :: ", typeof newArr);

console.log("myArr is 1st => ", myArr);

const myArrSlice = myArr.slice(1,3);
console.log("myArrSlice is => ", myArrSlice);
console.log("myArr is 2nd => ", myArr)

const myArrSplice = myArr.splice(1,3);
console.log("myArrSplice is => ", myArrSplice);
console.log("myArr is 3rd => ", myArr)
const myArrSplice2 = myArr.splice(1,3);
console.log("myArrSplice 2 is => ", myArrSplice2);
console.log("myArr is 4th => ", myArr)