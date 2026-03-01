// ==============================
// WEATHER DESCRIPTION FUNCTION
// ==============================

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

// =====================
// FETCH FUNCTION
// =====================

function getWeather(lat, lon) {

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
.then(response => response.json())
.then (data => {
  console.log(data);

  const temperature = data.current_weather.temperature;
  const windspeed = data.current_weather.windspeed;
  const weatherCode = data.current_weather.weathercode;

  const description = getWeatherDescription(weatherCode);

// Select Elements
  const tempElement = document.getElementById("temp");
  const windElement = document.getElementById("wind");
  const descElement = document.getElementById("condition");

// Update page
  tempElement.innerText = `Temperature: ${temperature} °C`;
  windElement.innerText = `Wind Speed: ${windspeed} km/h`;
  descElement.innerText = `Condition: ${description}`;

  console.log("Temperature:", temperature);
  console.log("Wind Speed:", windspeed);
  
})

.catch(error => {
  console.error("Error fetching weather:", error);
});
}

// =======================
// DEFAULT LOAD (Raleigh)
// =======================

getWeather(35.78, -78.64);

// =======================
// BUTTON EVENT LISTENERS
// =======================

document.getElementById("raleigh")
.addEventListener("click", function () {
  getWeather(35.78, -78.64);
});

document.getElementById("newyork")
.addEventListener("click", function () {
  getWeather(40.71, -74.00);
});