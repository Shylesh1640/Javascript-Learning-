//switch statements
let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Caution");
        break;
    default:
        console.log("Invalid signal");
        break;
}


//loops


//while loop

let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

//do while loop

let number = 0;
do {
    console.log("Number is: " + number);
    number++;
} while (number < 3);

