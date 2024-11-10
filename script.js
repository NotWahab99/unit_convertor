// Function to update units based on category
function updateUnits() {
  const category = document.getElementById("category").value;
  const unitSelect = document.getElementById("unit");
  let options = [];

  if (category === "mass") {
    options = [
      { value: "kgToG", text: "Kilogram to Gram", unit: "g" },
      { value: "gToKg", text: "Gram to Kilogram", unit: "kg" },
      { value: "lbToKg", text: "Pound to Kilogram", unit: "kg" },
      { value: "kgToLb", text: "Kilogram to Pound", unit: "lb" },
      { value: "tonToKg", text: "Ton to Kilogram", unit: "kg" },
      { value: "kgToTon", text: "Kilogram to Ton", unit: "ton" },
    ];
  } else if (category === "length") {
    options = [
      { value: "mToCm", text: "Meter to Centimeter", unit: "cm" },
      { value: "cmToM", text: "Centimeter to Meter", unit: "m" },
      { value: "kmToM", text: "Kilometer to Meter", unit: "m" },
      { value: "mToKm", text: "Meter to Kilometer", unit: "km" },
      { value: "mileToKm", text: "Mile to Kilometer", unit: "km" },
      { value: "kmToMile", text: "Kilometer to Mile", unit: "mile" },
      { value: "inToCm", text: "Inch to Centimeter", unit: "cm" },
      { value: "cmToIn", text: "Centimeter to Inch", unit: "in" },
    ];
  } else if (category === "time") {
    options = [
      { value: "secToMin", text: "Second to Minute", unit: "min" },
      { value: "minToHr", text: "Minute to Hour", unit: "hr" },
      { value: "hrToDay", text: "Hour to Day", unit: "day" },
      { value: "dayToHr", text: "Day to Hour", unit: "hr" },
      { value: "secToHr", text: "Second to Hour", unit: "hr" },
      { value: "hrToSec", text: "Hour to Second", unit: "sec" },
    ];
  } else if (category === "speed") {
    options = [
      { value: "mpsToKph", text: "m/s to km/h", unit: "km/h" },
      { value: "kphToMps", text: "km/h to m/s", unit: "m/s" },
      { value: "mphToKph", text: "mph to km/h", unit: "km/h" },
      { value: "kphToMph", text: "km/h to mph", unit: "mph" },
    ];
  } else if (category === "temperature") {
    options = [
      { value: "cToF", text: "Celsius to Fahrenheit", unit: "°F" },
      { value: "fToC", text: "Fahrenheit to Celsius", unit: "°C" },
      { value: "cToK", text: "Celsius to Kelvin", unit: "K" },
      { value: "kToC", text: "Kelvin to Celsius", unit: "°C" },
      { value: "fToK", text: "Fahrenheit to Kelvin", unit: "K" },
      { value: "kToF", text: "Kelvin to Fahrenheit", unit: "°F" },
    ];
  }

  // Clear previous options
  unitSelect.innerHTML = "";

  // Add new options
  options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.text;
    unitSelect.appendChild(opt);
  });

  // Call the conversion function after updating the units
  convert();
}

// Call updateUnits initially to populate the unit dropdown on page load
updateUnits();

// Function to convert units with rounding to 3 decimal places
function convert() {
  const inputValue = parseFloat(document.getElementById("userInput").value);
  const unit = document.getElementById("unit").value;
  let result = 0;
  let unitText = "";

  if (isNaN(inputValue)) {
    document.getElementById("resultElement").innerText = "Enter a number.";
    return;
  }

  // Conversion logic (added more conversions)
  if (unit === "kgToG") { result = inputValue * 1000; unitText = "g"; }
  else if (unit === "gToKg") { result = inputValue / 1000; unitText = "kg"; }
  else if (unit === "lbToKg") { result = inputValue * 0.453592; unitText = "kg"; }
  else if (unit === "kgToLb") { result = inputValue / 0.453592; unitText = "lb"; }
  else if (unit === "tonToKg") { result = inputValue * 1000; unitText = "kg"; }
  else if (unit === "kgToTon") { result = inputValue / 1000; unitText = "ton"; }
  else if (unit === "mToCm") { result = inputValue * 100; unitText = "cm"; }
  else if (unit === "cmToM") { result = inputValue / 100; unitText = "m"; }
  else if (unit === "kmToM") { result = inputValue * 1000; unitText = "m"; }
  else if (unit === "mToKm") { result = inputValue / 1000; unitText = "km"; }
  else if (unit === "secToMin") { result = inputValue / 60; unitText = "min"; }
  else if (unit === "minToHr") { result = inputValue / 60; unitText = "hr"; }
  else if (unit === "hrToDay") { result = inputValue / 24; unitText = "day"; }
  else if (unit === "dayToHr") { result = inputValue * 24; unitText = "hr"; }
  else if (unit === "secToHr") { result = inputValue / 3600; unitText = "hr"; }
  else if (unit === "hrToSec") { result = inputValue * 3600; unitText = "sec"; }
  else if (unit === "mpsToKph") { result = inputValue * 3.6; unitText = "km/h"; }
  else if (unit === "kphToMps") { result = inputValue / 3.6; unitText = "m/s"; }
  else if (unit === "mphToKph") { result = inputValue * 1.60934; unitText = "km/h"; }
  else if (unit === "kphToMph") { result = inputValue / 1.60934; unitText = "mph"; }
  else if (unit === "cToF") { result = (inputValue * 9/5) + 32; unitText = "°F"; }
  else if (unit === "fToC") { result = (inputValue - 32) * 5/9; unitText = "°C"; }
  else if (unit === "cToK") { result = inputValue + 273.15; unitText = "K"; }
  else if (unit === "kToC") { result = inputValue - 273.15; unitText = "°C"; }
  else if (unit === "fToK") { result = ((inputValue - 32) * 5/9) + 273.15; unitText = "K"; }
  else if (unit === "kToF") { result = ((inputValue - 273.15) * 9/5) + 32; unitText = "°F"; }
  else if (unit === "mileToKm") { result = inputValue * 1.60934; unitText = "km"; }
  else if (unit === "kmToMile") { result = inputValue / 1.60934; unitText = "mile"; }
  else if (unit === "inToCm") { result = inputValue * 2.54; unitText = "cm"; }
  else if (unit === "cmToIn") { result = inputValue / 2.54; unitText = "in"; }


  // Round the result to 3 decimal places
  let formattedResult = result.toFixed(3); // Round to 3 decimal points

  // Format with commas for thousands
  formattedResult = formattedResult.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Display the result with unit
  document.getElementById("resultElement").innerText = `${formattedResult} ${unitText}`;
}

// Add event listener for real-time updates on category change
document.getElementById("category").addEventListener("change", updateUnits);
document.getElementById("unit").addEventListener("change", convert); // Add listener to update result on unit change
document.getElementById("userInput").addEventListener("input", convert);  // Add listener to update result on user input
