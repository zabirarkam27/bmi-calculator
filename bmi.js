// BMI Calculator

document.getElementById('submit-btn').addEventListener('click', function() {
    let weight = parseFloat(document.getElementById('weight').value);
    let heightInInches = parseFloat(document.getElementById('height').value);

    if (!weight || !heightInInches) {
        alert("Please enter valid weight and height!");
        return;
    }

    // Convert height from inches to meters
    let height = heightInInches * 0.0254;

    // Calculate BMI
    let BMI = weight / (height ** 2);

    // Determine weight category
    let resultMessage;
    if (BMI < 18.5) {
        resultMessage = 'এত্তো চিকনা ক্যান?';
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        resultMessage = 'ওজন ঠিকঠাক আলহামদুলিল্লাহ 😊';
    } else if (BMI >= 25 && BMI <= 29.9) {
        resultMessage = ' 🥺মটু হওয়ার পথে...';
    } else {
        resultMessage = '😲 তুমি তো সত্যিকারের মটু হয়ে গেছো...';
    }

    // Display result
    document.getElementById('result').textContent = `Your BMI is ${BMI.toFixed(2)}. ${resultMessage}`;
});
