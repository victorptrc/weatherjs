const apiKey = "f567abe738931cdfdbff51d2d9d6b617";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherImg = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
  if (response.status === 404) {
    error.style.display = "block";
    weather.style.display = "none";
    return;
  }
  var data = await response.json();

  //   console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      weatherImg.src = "images/clouds.png";
      break;
    case "Clear":
      weatherImg.src = "images/clear.png";
      break;
    case "Drizzle":
      weatherImg.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherImg.src = "images/mist.png";
      break;
    case "Clear":
      weatherImg.src = "images/clear.png";
      break;
    case "Rain":
      weatherImg.src = "images/raincloud.png";
      break;
    case "Snow":
      weatherImg.src = "images/snow.png";
      break;
  }

  weather.style.display = "block";
  error.style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
