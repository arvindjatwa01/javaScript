function sayHello() {
  console.log("Hello User");
}

// sayHello();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;
}

const result = addTwoNumbers(1, 5);
// console.log(result);

function logginUserMessage(userName = "Google User") {
  if (!userName) {
    console.log("Please enter a userName");
  }
  return `${userName} just logged in`;
}

// console.log(logginUserMessage("Arvind"));
// console.log(logginUserMessage(""));
// console.log(logginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 450, 420, 2009));
