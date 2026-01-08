// array.reduce((accumulator, currentvalue) => {

// },initialValue);


let numbers = [1, 2, 3, 4, 5];
let totsum = numbers.reduce((sum, i) => {
    return sum + i;
}, 0);
console.log(totsum); // Output: 15