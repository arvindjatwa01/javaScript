//  for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log("5 is the best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop: ${i}`);
    // console.log(`${i}*${j} = ${i*j}`);
  }
}

const myArray = ["Apple", "Orange", "Banana"];
// console.log("Array Legth :", myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {

    if(i === 5){
        console.log(`Detected 5`);
        // break;
        continue;
    }
    // if(i % 2 !== 0){
    //     continue;
    // }
  console.log(`Value of i is ${i}`);
}
