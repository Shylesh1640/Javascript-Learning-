// getElementById examples

// Change the header text
function changeText() {
    const header = document.getElementById("header");
    header.innerText = "Hello JavaScript!";
    document.getElementById("output").innerText = "Header text changed!";
}

// Show input value
function showInput() {
    const input = document.getElementById("userInput");
    const output = document.getElementById("output");
    
    if (input.value.trim() === "") {
        output.innerText = "Please enter something first!";
    } else {
        output.innerText = "You typed: " + input.value;
    }
}

// Reset everything
function resetAll() {
    document.getElementById("header").innerText = "Hello, World!";
    document.getElementById("description").innerText = "Learn how getElementById works in JavaScript";
    document.getElementById("userInput").value = "";
    document.getElementById("output").innerText = "Output will appear here...";
    document.getElementById("counter").innerText = "0";
    document.getElementById("header").style.color = "#333";
}

// Random color for header
function changeColor() {
    const colors = ["#667eea", "#eb3349", "#11998e", "#f093fb", "#ff6b6b", "#4ecdc4"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const header = document.getElementById("header");
    header.style.color = randomColor;
    
    document.getElementById("output").innerText = "Color changed to: " + randomColor;
}

// Counter functions
function increment() {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
}

function decrement() {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count - 1;
}