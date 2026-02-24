fetch("https://api.open-meteo.com/v1/forecast?latitude=35.78&longitude=-78.64&current_weather=true")
.then(response => response.json())
.then (data => {
  console.log(data);

  const temperature = data.current_weather.temperature;
  const windspeed = data.current_weather.windspeed;

  const tempElement = document.getElementById("temp");
  const windElement = document.getElementById("wind");

  tempElement.innerText = `Temperature: ${temperature} °C`;
  windElement.innerText = `Wind Speed: ${windspeed} km/h`;

  console.log("Temperature:", temperature);
  console.log("Wind Speed:", windspeed);

 

  
})

.catch(error => {
  console.error("Error fetching weather:", error);
});
