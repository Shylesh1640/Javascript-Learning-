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