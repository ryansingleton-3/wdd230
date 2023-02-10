async function getWeather() {
  console.log("we are about to get api data!")
  const apiKey = "8184f1e17133404b88c32358231002";
  const zipCode = "62960";
  const resp = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=8184f1e17133404b88c32358231002&q=62960&aqi=no"
  );
  const data = await resp.json();
  getWeatherSpecs(data);
}

function getWeatherSpecs(data) {
  console.log("we are in weather specs!")
  let textCondition = data.current.condition.text;
  console.log(textCondition);
  let conditionIcon = data.current.condition.icon;
  let temp = data.current.temp_f;
  parseInt(temp);
  let windMPH = data.current.wind_mph;
  parseInt(windMPH);
  let windChill = 0;
  if (temp <= 50 && windMPH > 3) {
    windChill =
      35.74 +
      (0.6215 * temp) -
      (35.75 * (windMPH ** 0.16)) +
      (0.4275 * temp * (windMPH ** 0.16))
    windChill = (Math.round(windChill * 100) / 100).toFixed(2)
  } else {
    windChill = "N/A";
  }

  console.log(windChill);

  const weatherSection = document.getElementById("weather-section");
  const conditionIconImg = document.createElement("img");
  conditionIconImg.id = "condition-icon";
  conditionIconImg.class = "weather-flex-item";
  const tempDiv = document.createElement("div");
  tempDiv.id = "temp-div";
  tempDiv.class = "weather-flex-item";
  const conditionDiv = document.createElement("div");
  conditionDiv.id = "condition-div";
  conditionDiv.class = "weather-flex-item";
  const windMPHDiv = document.createElement("div");
  windMPHDiv.id = "wind-mph-div";
  windMPHDiv.class = "weather-flex-item";
  const windChillDiv = document.createElement("div");
  windChillDiv.id = "windchill-div";
  windChillDiv.class = "weather-flex-item";
  conditionIconImg.src = conditionIcon;
  conditionIconImg.alt = "weather icon";
  weatherSection.appendChild(conditionIconImg);

  weatherSection.appendChild(tempDiv);
  tempDiv.innerHTML = `${temp}&#176F`;

  weatherSection.appendChild(conditionDiv);
  conditionDiv.innerHTML = textCondition;

  weatherSection.appendChild(windMPHDiv);
  windMPHDiv.innerHTML = `Wind Speed: ${windMPH} mph`;

  weatherSection.appendChild(windChillDiv);
  windChillDiv.innerHTML = `Windchill: ${windChill}`;

  const linkBackDiv = document.createElement("div");
  linkBackDiv.id = "link-back-div";
  const linkBackText = `Powered by <em><a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>`;
  linkBackDiv.innerHTML = linkBackText;
  weatherSection.appendChild(linkBackDiv);
}

export { getWeather, getWeatherSpecs };
