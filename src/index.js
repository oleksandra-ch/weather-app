let now = new Date();
now.getDate();
console.log(now.getDate());
now.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
console.log(day);

let today = document.querySelector("#dayToday");
today.innerHTML = `${day}`;

let hours = now.getHours();
console.log(now.getHours());

let minutes = now.getMinutes();
console.log(now.getMinutes());

let time = document.querySelector("#currentTime");
time.innerHTML = `${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "f5e814a04eddfab1740f07bf0328eee2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", handleSubmit);

search("Budva");
