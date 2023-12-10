const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (item) {
  // console.log(item);
});
coding.forEach((item) => {
  //   console.log(item);
});

function printItem(item) {
  //   console.log(item);
}

// coding.forEach((item) => printItem(item))
coding.forEach(printItem);

coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
});


const myCoding = [
    {
        language: "javaScript",
        languageFileName: "js",
    },
    {
        language: "java",
        languageFileName: "java",
    },
    {
        language: "Python",
        languageFileName: "py",
    },
];

myCoding.forEach((itemObj) => {
    console.log(`language name is ${itemObj.language} of object`, "`", itemObj, "'");
});