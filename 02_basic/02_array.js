const bollywoodHeros = ["Amir", "Salman", "Nawaj", "Pankaj"];
const southHeros = ["Ramchran", "Allu arjun", "Mahesh babu"];

// bollywoodHeros.push(southHeros);

// console.log(bollywoodHeros);
// console.log(bollywoodHeros[4][1]);
// const herosArry = bollywoodHeros.concat(southHeros);
// console.log(herosArry);

// const allHeros = [...bollywoodHeros, ...southHeros];
// console.log(allHeros);

const anotherArray = [
  2,
  5,
  6,
  [3, 7, 8],
  6,
  4,
  [4, 7, 9, 6, [4, 8, [4, 7, 9, "Arviii"]]],
];

const realAnotherArray = anotherArray.flat(Infinity);

// console.log(anotherArray);
// console.log(realAnotherArray);

console.log(Array.from("Arvind"));
// console.log(Array.from({ name: "Arvind Jatwa" })); // intersting

const result1 = 200;
const result2 = 24;
const result3 = 890;
console.log(Array.of(result1, result2, result3));
