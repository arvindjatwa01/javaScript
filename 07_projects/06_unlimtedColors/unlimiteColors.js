// generate a random color

const randomColor = function () {
  const hex = "0123456789AVCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interValidId;
const startColorChange = function () {
  if (!interValidId) {
    interValidId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopColorChange = function () {
  clearInterval(interValidId);
  interValidId = null;
};

document.querySelector("#start").addEventListener("click", startColorChange);
document.querySelector("#stop").addEventListener("click", stopColorChange);
