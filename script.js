const apiKey = "f567abe738931cdfdbff51d2d9d6b617";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

checkWeather();
