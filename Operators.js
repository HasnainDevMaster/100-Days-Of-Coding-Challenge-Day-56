// 100 Days Of Coding Challenge!

/* Day-56 Task: Read the following Articles and Code along with it:

Type Conversions in JavaScript

Operators in JavaScript */

//------------------------------------------------------------------

// Operators in JavaScript

// 1. Arithmetic Operators:

// let a = 5;
// let b = 2; // cannot redeclare a and b

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5

//--------------------------------------------------------------------

// 2. Assignment Operators:

let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

//--------------------------------------------------------------------

// 3. Comparison Operators:

console.log(5 > 4); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false

//--------------------------------------------------------------------

// 4. Logical Operators:

console.log(true || false); // true
console.log(true && false); // false
console.log(!true); // false

//--------------------------------------------------------------------

// 5. Bitwise Operators:

console.log(5 & 3); // 1
console.log(5 | 3); // 7
console.log(5 ^ 3); // 6
console.log(~5); // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2
console.log(5 >>> 1); // 2

//--------------------------------------------------------------------

// 6. Ternary Operators:

let age = 18;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // You are an adult

//--------------------------------------------------------------------

// Exercises:

// Postfix and Prefix Forms

// let a = 1, b = 1; // cannot redeclare a and b

let c = ++a; // ?
let d = b++; // ?

/* ++a is the prefix form, which increments a and then returns the new value.
So, a becomes 2, and c is 2.

b++ is the postfix form, which returns the current value of b and then increments it.
So, d is 1, and b becomes 2. */

// Final values:

a = 2;
b = 2;
c = 2;
d = 1;

//-----------------------------------------------------------------------------------

// Assignment Result

// let a = 2;

// let x = 1 + (a *= 2); // cannot redeclare a and x

/* a *= 2 multiplies a by 2 and assigns the result to a. So, a becomes 4.
x = 1 + 4 results in x being 5.

Final values:

a = 4
x = 5 */

//-------------------------------------------------------------------------

/* Type Conversions
Evaluate the following expressions: */

"" + 1 + 0;
Result: "10"; // (String concatenation)

"" - 1 + 0;
Result: -1; // (String is converted to number, then subtraction)

true + false;
Result: 1; // (true is 1, false is 0)

6 / "3";
Result: 2; // (String is converted to number, then division)

"2" * "3";
Result: 6; // (Strings are converted to numbers, then multiplication)

4 + 5 + "px";
Result: "9px"; // (Numbers are added, then concatenated with string)

"$" + 4 + 5;
Result: "$45"; // (String concatenation)

"4" - 2;
Result: 2; // (String is converted to number, then subtraction)

"4px" - 2;
Result: NaN; // (String cannot be converted to number)

"  -9  " + 5;
Result: "  -9  5"; // (String concatenation)

"  -9  " - 5;
Result: -14; // (String is converted to number, then subtraction)

null + 1;
Result: 1; // (null is 0)

undefined + 1;
Result: NaN; // (undefined is NaN)

" \t \n" - 2;
Result: -2; // (String is converted to number 0)

//-------------------------------------------------------------------------

/* Fix the Addition
The issue is that prompt returns a string, so the concatenation happens instead of addition. Convert the inputs to numbers: */

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(Number(a) + Number(b)); // 3
