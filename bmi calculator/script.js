function cal(){
    let weightInput = prompt("Enter your weight in kg:");
    let heightInput = prompt("Enter your height in meters:");
    
    let weight = parseFloat(weightInput);
    let heightCm = parseFloat(heightInput);

    let height = heightCm / 100; // Convert cm to meters

    let bmi = weight / (height * height);

    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
}