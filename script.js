function ChangeData(response) {
  let currentTemp = response.data.temperature.current;
  let temp = document.querySelector(".current-temperature-value");
  temp.innerHTML = Math.round(currentTemp);

  let city = document.querySelector("#current-city");
  city.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let currentCity = searchInputElement.value;
  let apiKey = "930bfof4e5b7tb729d2b7a0ceb8d91f3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${apiKey}`;
  axios.get(apiUrl).then(ChangeData);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
