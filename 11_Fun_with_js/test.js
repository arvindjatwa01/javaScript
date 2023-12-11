const myArr = [];
// %DebugPRint(myArr);

// continious, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrayTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrayTwo.push(6.0);
// PACKED_DOUBLE_ELEMENT

arrayTwo.push("7");
// PACKED_ELEMENTS

arrayTwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrayTwo);
console.log(arrayTwo.length);
console.log(arrayTwo[9]);

// bound check
// hasOwnProperty(arrayTwo, 9);
// hasOwnProperty(arrayTwo.protoType, 10);
// hasOwnProperty(Object.protoType, 10);

// holes are very expencive in js

const arrayThree = [1, 2, 3, 4, 5];
console.log(arrayThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrayFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrayFour[0] = "1"; // HOLEY_ELEMENTS
arrayFour[1] = "2"; // HOLEY_ELEMENTS
arrayFour[2] = "3"; // HOLEY_ELEMENTS

const arrayFive = [];
arrayFive.push("1"); // PACKED_ELEMENTS
arrayFive.push("2"); // PACKED_ELEMENTS
arrayFive.push("3"); // PACKED_ELEMENTS

const arraySix = [1, 2, 3, 4, 5];

arraySix.push(NaN); // PACKE_DOUBLE
arraySix.push(Infinity); // PACKE_DOUBLE
