// ===================================
// WEATHER DESCRIPTION FUNCTION
// Converts Open-Meteo weather codes
// into readable weather descriptions
// ===================================

function getWeatherDescription(code) {
  const weatherMap = {
    0: "Clear Sky ☀️",
    1: "Mainly Clear 🌦️",
    2: "Partly Cloudy 🌥️",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    61: "Rain 🌧️",
    71: "Snow ❄️",
    80: "Rain Showers 🌦️"
  };

  return weatherMap[code] || "Unknown Weather";
}

// =========================================
// ENDPOINT # 1 - CURRENT WEATHER
// Fetches wind speed and weather condition 
// =========================================

function getWeather(lat, lon) {

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
.then(response => response.json())
.then (data => {
  console.log(data);

  const windspeed = data.current_weather.windspeed;
  const weatherCode = data.current_weather.weathercode;

  const description = getWeatherDescription(weatherCode);

// Select Elements
  const windElement = document.getElementById("wind");
  const descElement = document.getElementById("condition");

// Update page
  windElement.innerText = `Wind Speed: ${windspeed} km/h`;
  descElement.innerText = `Condition: ${description}`;

  console.log("Wind Speed:", windspeed);
  
})

.catch(error => {
  console.error("Error fetching weather:", error);
});
}

// ============================
// ENDPOINT # 2 - TEMPERATURE
// Fetches temperature data
// ============================

function getTemperature(lat, lon) {

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
.then(response => response.json())
.then (data => {
  console.log(data);

  const temperature = data.hourly.temperature_2m[0];
  
// Select Elements
  const tempElement = document.getElementById("temp");

// Update page
  tempElement.innerText = `Temperature: ${temperature} °C`;
  
  console.log("Temperature:", temperature);
  
})

.catch(error => {
  console.error("Error fetching temperature:", error);
});
}

// =======================
// DEFAULT LOAD (Raleigh)
// Runs when page loads
// =======================

getTemperature(35.78, -78.64);
getWeather(35.78, -78.64);

// =======================
// BUTTON EVENT LISTENERS
// =======================

// =================================
// CITY NAVIGATION BUTTONS
// Each click makes new API requests
// =================================

// Raleigh Button 
document.getElementById("raleigh")
.addEventListener("click", function () {
  getTemperature(35.78, -78.64);
  getWeather(35.78, -78.64);
});

// New York Button 
document.getElementById("newyork")
.addEventListener("click", function () {
  getTemperature(40.71, -74.00);
  getWeather(40.71, -74.00);
});