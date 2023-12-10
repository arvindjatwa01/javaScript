const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapNumbers = myNumbers.map((item) => item + 10);
// console.log(mapNumbers);

const forEachNums = [];
myNumbers.forEach((num) => forEachNums.push(num + 10));
// console.log(forEachNums)

const chainingNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);
console.log(chainingNums);
