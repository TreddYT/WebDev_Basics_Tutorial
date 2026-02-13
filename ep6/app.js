// Declaring variables
const username = "John"; // string
let password = "password"; // string
var age = 30; // number

let isLoggedIn = true; // Boolean

let email; // undefined
let selectedUsed = null; // null

const list = [1, 2, 3, "a", "b", true]; // array

console.log(list[3]); // "a"

// Object
const userData = {
//  key: value,
    name: "Tredd",
    birthYear: 1994,
    isActive: true
};

console.log(userData.birthYear); // 1994

// Variables delared with let and var can be reassigned
password = "password12345";
age = 31;

// String concatenation using a variable
console.log("Hello, " + username + "!"); // "Hello, John!"

// Loose equality
console.log("2" == 2); // true

// Strict equality
console.log("2" === 2); // false

// if...else Statement
if (age < 13) {
    console.log("child");
} else if (age < 20) {
    console.log("teenager");
} else {
    console.log("adult");
};

// switch Statement
const day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Just another day.");
};

// Logical operators
const boolOne = true;
const boolTwo = false;
const boolThree = false;

// Logical AND - both must be true
console.log(boolOne && boolTwo); // false

// Logical OR - only one must be true
console.log(boolOne || boolTwo); // true

// Logical NOT - inverts the boolean value
console.log(!boolOne); // false

// AND is evanulated before OR
console.log(boolOne || boolTwo && boolThree); // true

// Parentheses are evaluated first
console.log((boolOne || boolTwo) && boolThree); // false

/*
Falsy values
false
0
-0
0n
""
null
undefined
NaN
*/

if (email) {
    console.log("The expression is true");
} else {
    console.log("The expression is false");
};

// for loop - runs 5 times
for (let i = 0; i < 5; i = i + 1) {
    console.log("Iteration: " + i);
};

// for loop - loops through an arry
for (let i = 0; i < list.length; i++) { // i = i + 1 -> i += 1 -> i++
    console.log(list[i]);
};

// while loop
let j = 0; // Variable exists outside of the loop
while (j < list.length) {
    console.log(list[j]);
    j++; // Variable is changed inside of the loop
};

console.log(j); // 6 -> j variable is pe·manently affected

// Arrow Function
const func = (num1, num2) => { // num1 & num2 are parameters
    return num1 + num2;
};

// function keyword
function oldFunc () {
    console.log("using the function keyword");
};

// Function calls
const result = func(6, 7); // 6 & 7 are arguments
oldFunc();

console.log(result); // 13 -> 'result' is assigned the value returned by 'func' using the 'return' keyword