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
