let fruits = ["apple","pomegranate", "banana", "cherry","papaya"];
console.log(fruits[1]); // Output: pomegranate
fruits.push("guvava");
console.log(fruits); // Output: ["apple","pomegranate", "banana", "cherry","papaya", "guvava"]
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple","pomegranate", "banana", "cherry","papaya", "guvava"]
fruits.pop();
console.log(fruits); // Output: ["kiwi", "apple","pomegranate", "banana", "cherry","papaya"]
fruits.shift();
console.log(fruits); // Output: ["apple","pomegranate", "banana", "cherry","papaya"]
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.indexOf("cherry")); // Output: 3
fruits.splice(1,2); // Removes "pomegranate" and "banana"
console.log(fruits); // Output: ["apple", "cherry","papaya"]
fruits.splice(0,1,"rambutan"); // Replaces "apple" with "rambutan"
console.log(fruits); // Output: ["rambutan","cherry","papaya"]
let vegetables = ["carrot", "broccoli", "spinach", "potato","cabbage"];
vegetables.sort();
console.log(vegetables);
let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort();
numbers.reverse();
console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]