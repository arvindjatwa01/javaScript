let a = 200;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("Inner :: ", a)
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Arvind";

  function two() {
    const website = "youtube";

    console.log("userName :: ", userName);
  }

  // console.log("website :: ", website)
  two();
}

// one();

if (true) {
  const userName = "arvind";

  if (userName === "arvind") {
    const website = " learnigPoint";
    // console.log(userName + website);
  }

  //   console.log("website :: ", website)
}

//   console.log("userName :: ", userName)

// ++++++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++++++++ //

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  // expression
  return num + 2;
};

addTwo(5);
