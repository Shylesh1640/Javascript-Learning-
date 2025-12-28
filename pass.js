let password = "admin@123";
let userinput = "";

while(userinput !== password) {
    userinput = prompt("Enter your password:");
    if(userinput !== password) {
        console.log("Incorrect password, please try again.");
    }
}
console.log("Access granted!");

//output:
// Enter your password: 1234
// Incorrect password, please try again.
// Enter your password: admin@123
// Access granted!