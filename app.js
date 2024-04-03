// DOM
const input = document.querySelector("input");
const buttonShow = document.querySelector("button");
const cityName = document.querySelector(".w-card h3");
const tempH1 = document.querySelector(".temp h1");
const img = document.querySelector(".temp img");
const p = document.querySelectorAll(".w-card p");
const p1 = p[0];
const p2 = p[1];
const p3 = p[2];

// API
const apiKey = "&appid=6511e14723ad8cb6f243ece1366c5deb";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";

buttonShow.addEventListener("click", function () {
  const city_name = input.value.trim().toUpperCase();
  fetchWeather(city_name);
});

function fetchWeather(city_name = "bishkek") {
  fetch(baseURL + city_name + apiKey)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "---data---");
      const { name, sys, main, wind, weather } = data;
      cityName.innerHTML = `${name} <span>${sys.country}</span> `;
      tempH1.innerHTML = `${Math.round(main.temp - 273.15)}<span>°c</span>`;
      p1.innerHTML = `${wTranslate(weather[0].main)}`;
      p2.innerHTML = `Ветер   <span>${wind.speed}км/ч</span>`;
      p3.innerHTML = `Влажность   <span>${main.humidity}%</span>`;
      img.src = setImg(weather[0].main);
    })
    .catch();
}
fetchWeather();

function setImg(text) {
  switch (text) {
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      return "./images/rain2.png";
    case "Sunny":
    case "Sun":
    case "Warmth":
    case "Heat":
    case "Clear":
      return "./images/sunny.png";
    case "Sun shower":
    case "Rain clouds":
    case "Sunshine and rain":
      return "./images/rain.png";
    case "Wind":
    case "Clouds":
    case "Breeze":
    case "Glust":
    case "Blustery":
      return "./images/mist.png";
    case "Fog":
    case "Fogggy":
    case "Overcast":
      case "Mist":
      return "./images/fog.png";
    case "Snow":
    case "Blizzard":
    case "Snowdrift":
    case "Snowfall":
    case "Snowflake":
      return "./images/snow.png";
  }
}

function wTranslate(word) {
  let translation;
  switch (word) {
    case "Rain":
      translation = "Дождь";
      break;
    case "Drizzle":
      translation = "Мелкий дождь";
      break;
    case "Thunderstorm":
      translation = "Гроза";
      break;
    case "Sunny":
      translation = "Солнечно";
      break;
    case "Sun":
      translation = "Солнце";
      break;
    case "Warmth":
      translation = "Тепло";
      break;
    case "Heat":
      translation = "Жара";
      break;
    case "Clear":
      translation = "Ясно";
      break;
    case "Sun shower":
      translation = "Ливень при солнце";
      break;
    case "Rain clouds":
      translation = "Дождевые облака";
      break;
    case "Sunshine and rain":
      translation = "Солнце и дождь";
      break;
    case "Wind":
      translation = "Ветер";
      break;
    case "Clouds":
      translation = "Облачно";
      break;
    case "Breeze":
      translation = "Легкий ветер";
      break;
    case "Glust":
      translation = "Сильный ветер";
      break;
    case "Blustery":
      translation = "Ветреный";
      break;
    case "Mist":
      translation = "Дымка";
      break;
    case "Fog":
      translation = "Туман";
      break;
    case "Fogggy":
      translation = "Туманный";
      break;
    case "Overcast":
      translation = "Пасмурно";
      break;
    case "Snow":
      translation = "Снег";
      break;
    case "Blizzard":
      translation = "Метель";
      break;
    case "Frost":
      translation = "Мороз";
      break;
    case "Snowdrift":
      translation = "Снежный сугроб";
      break;
    default:
  }
  return translation;
}
