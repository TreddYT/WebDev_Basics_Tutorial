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