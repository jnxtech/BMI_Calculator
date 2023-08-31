document.addEventListener("DOMContentLoaded", function () {
    var calculateBtn = document.getElementById("calculateBtn");
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultElement = document.getElementById("result");
    var categoryElement = document.createElement("p");
    var resetBtn = document.createElement("button");
    var bmiRangeSection = document.createElement("div");
    

    categoryElement.id = "category";
    resetBtn.textContent = "Reset";
    resetBtn.id = "resetBtn";
    bmiRangeSection.id = "bmiRangeSection";
    bmiRangeSection.style.display = "none"; 

    if (calculateBtn && weightInput && heightInput && resultElement) {
        calculateBtn.addEventListener("click", function () {
            var weight = parseFloat(weightInput.value);
            var height = parseFloat(heightInput.value) / 100;
            if (isNaN(weight) || isNaN(height)) {
                resultElement.textContent = "Please enter valid values.";
                return;
            }
            var bmi = weight / (height * height);
            resultElement.textContent = "Your BMI is: " + bmi.toFixed(2);

            
            categoryElement.style.display = "block";
            bmiRangeSection.style.display = "block";
            resetBtn.style.display = "block"; 

            if (bmi < 18.5) {
                categoryElement.textContent = "Result: Underweight";
                resultElement.style.color = "#ff5733"; 
            } else if (bmi >= 18.5 && bmi < 24.9) {
                categoryElement.textContent = "Result: Normal";
                resultElement.style.color = "#00ff00"; 
            } else if (bmi >= 25 && bmi < 29.9) {
                categoryElement.textContent = "Result: Overweight";
                resultElement.style.color = "#ff9800"; 
            } else {
                categoryElement.textContent = "Result: Obese";
                resultElement.style.color = "#ff2400"; 
            }

            resultElement.scrollIntoView({ behavior: "smooth" });
        });

        resetBtn.addEventListener("click", function () {
            weightInput.value = "";
            heightInput.value = "";
            resultElement.textContent = "";
            categoryElement.textContent = "";
            resultElement.style.color = "#f0f0f0"; 
            categoryElement.style.display = "none"; 
            bmiRangeSection.style.display = "none"; 
            resetBtn.style.display = "none";
        });

        var bmiRanges = [
            { category: "Underweight", range: "< 18.5", description: "You may be underweight. Consider consulting a healthcare professional." },
            { category: "Normal", range: "18.5 - 24.9", description: "You have a normal weight. Keep up the good work!" },
            { category: "Overweight", range: "25 - 29.9", description: "You may be overweight. It's a good idea to maintain a healthy diet and exercise routine." },
            { category: "Obese", range: "30+", description: "You are in the obese range. Consult a healthcare professional for advice on managing your weight." }
        ];

        bmiRanges.forEach(function (range) {
            var rangeDiv = document.createElement("div");
            rangeDiv.className = "bmi-range";
            rangeDiv.innerHTML = `<strong>${range.category}:</strong> ${range.range} - ${range.description}`;
            bmiRangeSection.appendChild(rangeDiv);
        });

        var container = document.querySelector(".container");
        container.appendChild(categoryElement);
        container.appendChild(resetBtn);
        container.appendChild(bmiRangeSection);
    }
});