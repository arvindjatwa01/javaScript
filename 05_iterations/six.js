// const coding = ["js", "ruby", "java", "python", "cpp"];

// const codingValues = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(codingValues);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((val) => val > 4);
// const newNums = myNums.filter((val) => {
//     return val > 4;
// });
// console.log(newNums);

const forEachNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    forEachNums.push(num);
  }
});

// console.log(forEachNums)

const books = [
  { title: "Book One", genre: "Fication", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fication", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fication", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fication", publish: 1987, edition: 2010 },
  { title: "Book Sevan", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fication", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === "History");

const userBooks = books.filter((book) => book.publish >= 1995 && book.genre === "History")

console.log(userBooks);