const name = "Rohan";
const age = 22;

// console.log(name + age + " Years");

// console.log(`My name is ${name}, I'm ${age} years old.`);

const myApp = new String("arvind jatwa 01");
// console.log(myApp);
// console.log(myApp[0]);
// console.log(myApp.__proto__);
// console.log(myApp.length);
// console.log(myApp.toUpperCase());
// console.log(myApp.charAt(2));
// console.log(myApp.indexOf('s'));

const newString = myApp.substring(0, 5);
// const newString = myApp.substring(0, -1); // negative is not acceptable in subString method
// console.log(newString) empty
// console.log(typeof newString) // string
// console.log(newString.length) // 0

const anotherString = myApp.slice(-8, 5);
// console.log(anotherString);

const newStringOne = "    arvind    ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove white space from starting and end
// console.log(newStringOne.trimStart()); // remove white space from start
// console.log(newStringOne.trimEnd()); // remove white space from end
// console.log("".trim());

// const myUrl = "https://arvind.com/arvind%20jawta%2001";
// console.log(myUrl.replace("%20","-")); // remove first
// console.log(myUrl.replaceAll("%20","-")); // remove all

// console.log(myApp.split(" ")); // return an array it is splict byt whitespce

const myName = new String("arvind-kumar-jatwa");

const myNameCharAt = myName.fontcolor("red");

console.log(myName.length);
console.log(myNameCharAt);
console.log("arvind ".split("a"));

// console.log(myName.anchor()); // return an anchor tag || <a name="undefined">arvind-kumar-jatwa</a>
// console.log(myName.at(2)); // The index (position) of the string character to be returned || v
// console.log(myName.big()) // creates a string that embeds this string in a <big> element ||<big>arvind-kumar-jatwa</big>
// console.log(myName.blink()) // create a html blink tag with the string content || <blink>arvind-kumar-jatwa</blink>
// console.log(myName.bold()); // create a html bold tag || <b>arvind-kumar-jatwa</b>
// console.log(myName.charAt(4)) // return chartacter of defined index || n
// console.log(myName.charCodeAt(4)) // return a character code unit (UTF-16 code => between 0 to 65535) || 110
// console.log(myName.codePointAt(4)) // return a character code point
// console.log(myName.concat(" ", "My Name")) // concat two or more strings
// console.log(myName.endsWith("wa")) // check stirng is end with defined string or character or not  || return true|False
// console.log(myName.fixed()) // embeded the string in <tt> element which causes this string to be displayed in a fixed-width font || <tt>arvind-kumar-jatwa</tt>
// console.log(myName.fontcolor("red")) // chnage the color for the string text || <font color="res">arvind-kumar-jatwa</font>
// console.log(myName.fontsize(4)) // change the font size (size between 1 to 7 then repeat)||<font size="7">Hello, world</font>
// console.log(myName.includes("wa")) // check the string|character inculdes or not in stirng || return true|false
// console.log(myName.indexOf("w")) // finx the inex of the character Or String(first character) || return 16(number)
// console.log(myName.isWellFormed()) ** Not exist
// console.log(myName.italics()) // embeded into <i> tag || <i>arvind-kumar-jatwa</i>
// console.log(myName.lastIndexOf("a")); // return index from end  ||  17(numeric)
// console.log(myName.length) // return the length of the string || return
// console.log(myName.link("www.google.com")) // it is same as anchor method || <a name="undefined">arvind-kumar-jatwa</a>
// console.log(myName.anchor("pyx.co.in"))

/*
match & match all method are work with regex ||  we check for emial, IP ann many more things or validation
// console.log(myName.match())
// console.log(myName.matchAll())
*/

// sting.normalize() // this method is used for covert an unicode into a string
// console.log(myName.padEnd(10, ".")) add string or many text according to needed at the end
// console.log(myName.padStart(10, ".")) add string or many text according to needed at the starting
// console.log(myName.repeat(2)) // returns a new string which contains the specified number of copies of this string, concatenated together. || arvind-kumar-jatwaarvind-kumar-jatwa
// console.log(myName.replace("-", " ")); // return a new string of replace with replacement, replace the first matches || arvind kumar-jatwa
// console.log(myName.replaceAll("-", " ")); // return a new string of replace with replacement, replace all the matches || arvind kumar-jatwa
// console.log(myName.slice(5)) // extracts a section of this string and returns it as a new string, without modifying the original string. || d-kumar-jatwa
// console.log(myName.small()) // creates a string that embeds this string in a <small> element (<small>str</small>), which causes this string to be displayed in a small font || <small>arvind-kumar-jatwa</small>
// console.log(myName.split("a")) // takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array. || [ '', 'rvind-kum', 'r-j', 'tw', '' ]
// console.log(myName.startsWith("ar")) // determines whether this string begins with the characters of a specified string, returning true or false as appropriate. || true|false
// console.log(myName.strike()) // creates a string that embeds this string in a <strike> element (<strike>str</strike>), which causes this string to be displayed as struck-out text. || <strike>arvind-kumar-jatwa</strike>
// console.log(myName.sub()) // creates a string that embeds this string in a <sub> element (<sub>str</sub>), which causes this string to be displayed as subscript. || <sub>arvind-kumar-jatwa</sub>
console.log("\u0130".toLocaleLowerCase("tr")); // returns this string converted to lower case, according to any locale-specific case mappings. || i
// console.log("\u0130".toLocaleUpperCase('tr')) // returns this string converted to upper case, according to any locale-specific case mappings. || I
// console.log("ARVIn JAtWa".toLowerCase()) //  returns this string converted to lower case. || arvind jatwa
// console.log("ARVIn JAtWa".toUpperCase()) //  returns this string converted to upper case. || ARVIND JATWA
// console.log(myName.toString()) // returns this string value. || arvin-kumar-jatwa

/* =============== */

// console.log("ab\uD800c".toWellFormed()) return error that is not a funtion

/* =============== */

// console.log(" Arvind kumar jatwa   ".trim()) // removes whitespace from both ends of this string and returns a new string, without modifying the original string. || Arvind kumar jatwa
// console.log("  Arvind jatwa   ".trimEnd()) // // removes whitespace from ends of this string and returns a new string, without modifying the original string.
// console.log("  Arvind jatwa   ".trimStart()) // // removes whitespace from start of this string and returns a new string, without modifying the original string.
let userName = "    Arvind jatwa      ";
let userNameTrimLeft = userName.trimLeft(); // remove only one white space from left or end
let userNameTrimEnd = userName.trimEnd(); //  remove all white space from end
// console.log(userName.length)
// console.log(userNameTrimLeft.length)
// console.log(userNameTrimEnd.length)

let userNameTrimRight = userName.trimRight(); // remove only one white space from left or end
let userNameTrimStart = userName.trimStart(); // remove all white space from end

// console.log(userName.length)
// console.log(userNameTrimRight.length)
// console.log(userNameTrimStart.length)

// console.log(myName.valueOf()) // returns this string value.

const names = ["beena", "pinkey", "sanjay", "arvind"];
console.log(names.toString());

const namesObj = [
    { name: "Beena", age: 29 },
    { name: "Pinkey", age: 27 },
    { name: "Sanjay", age: 25 },
    { name: "Arvind", age: 23 },
];
console.log(namesObj.toString());
