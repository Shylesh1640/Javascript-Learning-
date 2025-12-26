//Syntax

//if else statement

let age = 20;

if (age < 18) {
    console.log("You are a minor.");
}
else {
    console.log("You are an adult.");
}

//ternary operator

let access = (age >= 18) ? "Granted" : "Denied";
console.log("Access: " + access);

let dhoni = '7';
let ronaldo = 7;

console.log(dhoni == ronaldo);  // true (value comparison)
console.log(dhoni === ronaldo); // false (type and value comparison)


// and or not operators

// let imdbRating = 8.5;
// let boxOfficeCollection = 200;

// if (imdbRating > 7 && boxOfficeCollection > 100) {
//     console.log("Supper Hit Movie!");
// }
// else {
//     console.log("Average Movie.");
// }

let imdbRating = 6;
let boxOfficeCollection = 97;

if (imdbRating > 7 || boxOfficeCollection > 100) {
    console.log("Industry Hit Movie!");
}
else {
    console.log("Flop Movie.");
}

// not operator
let isRaining = false;

if (!isRaining) {
    console.log("You can go for a walk.");
}
else {
    console.log("Better to stay indoors.");
}

let movie = "k";

if (!(movie === "k" || movie === "v" || movie === "l")) {
    console.log("not from kvl.");
}
else {
    console.log("from kvl.");
}