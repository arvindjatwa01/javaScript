const buttons = document.querySelectorAll(".button");
const bodyElement = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    bodyElement.style.backgroundColor = e.target.id;
  });
});

// function changeBgColor(e) {
//   bodyElement.style.backgroundColor = e.target.id;
//   console.log(e.target.id);
// }
