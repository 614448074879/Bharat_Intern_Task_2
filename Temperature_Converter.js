document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convertBtn");
    const resultText = document.getElementById("resultText");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = celsiusValue * 9/5 + 32;
            resultText.textContent = `${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`;
        } else {
            resultText.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
