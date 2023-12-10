# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project=chaiaurcode?file=index.html)

# Solution code

## project 1 Solution Code (Color Change)

```javascript
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
//
```

## project 2 Solution Code (BMI Calculator)

```javascript
const form = document.querySelector("form");

// this use case will give you empty
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a vali height ${height}`;
    // results.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a vali weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `<span>${bmi}(${
      bmi < 18.6
        ? "Under Weight"
        : bmi >= 18.6 && bmi < 24.9
        ? "Normal Range"
        : "Overweight"
    })</span>`;
  }
});
```

## project 3 Solution Code (Digital Clock)

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock");

setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerText = date.toLocaleTimeString();
}, 1000);
```

## project 4 Solution Code (Guess The Number)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGusses = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more thrn 1");
  } else if (guess > 100) {
    alert("Please enter a number less thrn 100");
  } else {
    prevGusses.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  ,`;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("buttom");
  p.innerHTML = `<h2 id="startGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameStartBtn = document.querySelector("#startGame");
  newGameStartBtn.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGusses = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingGuess.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## project 5 Solution Code (Keyboard Key Detactor)

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `
<div class="color">
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`;
});
```

## project 6 Solution Code (Unlimited color )

```javascript
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
```
