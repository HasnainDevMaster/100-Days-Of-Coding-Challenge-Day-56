// 100 Days Of Coding Challenge!

/* Day-56 Task: Read the following Articles and Code along with it:

Type Conversions in JavaScript

Operators in JavaScript */

//------------------------------------------------------------------

/* Type Conversions in JavaScript:
This article covers how JavaScript handles type conversions, both implicit and explicit.
You’ll learn how to convert between strings, numbers, and booleans, and understand the rules JavaScript follows for these conversions. */

// Type Conversions in JavaScript:

// 1. String Conversion:

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

//--------------------------------------------------------------

// 2. Numeric Conversion:

let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

//--------------------------------------------------------------

// 3. Boolean Conversion:

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
