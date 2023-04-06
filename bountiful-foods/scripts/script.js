async function getWeather() {
  const APIKey = "dc626a08fd4a1801393e2bfefc1167ff";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=${APIKey}&units=imperial`
  );
  const data = await res.json();

  const resF = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&appid=${APIKey}&units=imperial`
  );
  const dataF = await resF.json();
  displayWeather(data, dataF);
}

async function displayWeather(data, dataF) {
  // current weather
  let currentWDiv = document.createElement("div");
  currentWDiv.setAttribute("id", "current-weather-div");
  document.querySelector("#weather-section").appendChild(currentWDiv);
  let weather = document.createElement("h2");
  currentWDiv.appendChild(weather);
  weather.innerHTML = "Weather";
  let currentIcon = document.createElement("img");
  currentWDiv.appendChild(currentIcon);
  currentIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  currentIcon.setAttribute("alt", "weather icon")
  let tempDiv = document.createElement("Div");
  currentWDiv.appendChild(tempDiv);
  tempDiv.innerHTML = `${data.main.temp}&#176F`;
  let descriptionDiv = document.createElement("Div");
  currentWDiv.appendChild(descriptionDiv);
  let str = data.weather[0].description;

  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  str = str.join(" ");

  desc = str;
  descriptionDiv.innerHTML = `${desc}`;
  let humidityDiv = document.createElement("Div");
  currentWDiv.appendChild(humidityDiv);
  humidityDiv.innerHTML = `${data.main.humidity}% Humidity`;
}
if (localStorage.getItem("drinksSubmitted") == null) {
  drinksSubmitted = 0;
} else {
  drinksSubmitted = localStorage.getItem("drinksSubmitted");
}

if (drinksSubmitted == 0) {
  drinksSubmittedMsg = "You have not submitted any drinks yet!";
} else if (drinksSubmitted == 1) {
  drinksSubmittedMsg = `You have created ${drinksSubmitted} drink so far!`;
} else {
  drinksSubmittedMsg = `You have created ${drinksSubmitted} drinks so far!`;
}

document.querySelector("#drinks-submitted").innerHTML = drinksSubmittedMsg;

getWeather();
