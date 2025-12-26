function cal(){
    let weightInput = prompt("Enter your weight in kg:");
    let heightInput = prompt("Enter your height in cm:");
    
    // Validate input
    if (!weightInput || !heightInput) {
        return;
    }

    let weight = parseFloat(weightInput);
    let heightCm = parseFloat(heightInput);

    // Check for valid numbers
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById("result").innerHTML = 
            '<span class="error">Please enter valid positive numbers!</span>';
        return;
    }

    let height = heightCm / 100; // Convert cm to meters
    let bmi = weight / (height * height);

    // Determine BMI category and color class
    let category = "";
    let colorClass = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        colorClass = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        colorClass = "overweight";
    } else {
        category = "Obese";
        colorClass = "obese";
    }

    document.getElementById("result").innerHTML = 
        '<div class="bmi-value">Your BMI: <strong>' + bmi.toFixed(2) + '</strong></div>' +
        '<div class="bmi-category ' + colorClass + '">' + category + '</div>' +
        '<div class="bmi-info">Healthy BMI range: 18.5 - 24.9</div>';
}