function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");
    
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convert height to meters
    
    // Validate inputs
    if (isNaN(weight) || isNaN(height)) {
      resultDiv.textContent = "Please enter valid weight and height.";
      return;
    }
    
    // Calculate BMI
    var bmi = weight / (height * height);
    
    // Determine BMI category
    var category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
    
    // Display the result
    resultDiv.textContent = "Your BMI is: " + bmi.toFixed(2) + " (" + category + ")";
  }
  