//Arithmetic Operators in JavaScript

// Addition
let a = 10;
let b = 5;
let sum = a + b;
console.log("Addition: " + sum); // Output: 15

a = a + 1; // Increment a by 1
console.log("Incremented a: " + a); // Output: 11 

let c = 11;
c = c%2; // Modulus assignment
console.log("Modulus of 11 % 2: " + c); // Output: 1

//BODMAS Rule Example
//operetor precedence

c = c**2; // Exponentiation
console.log("Exponentiation of 1^2: " + c); // Output: 1

let number = 150
console.log(typeof number); // Output: number

number = String(number);
console.log(typeof number); // Output: string

n1 ="shylesh"
n1 = Number(n1);
console.log(typeof n1); // Output: number (NaN)
console.log(n1); // Output: NaN

let name2 = "hi"
name2 = Boolean(name2);
console.log(typeof name2);
console.log(name2); // Output: true

//parseFloat
let num1 = "12.34"
num1 = parseFloat(num1);
console.log(typeof num1);

let num = "5269.879"
console.log(typeof num);
let parsenum = parseFloat(num);
console.log(typeof parsenum);
console.log(parsenum);

console.log(parseFloat("548568.4523").toFixed(2));