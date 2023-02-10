let textCondition = "";
let conditionIcon = null;
let temp = null;
let windMPH = null;
let windChill = null;

const apiKey = "8184f1e17133404b88c32358231002";
metropolisZipCode = "62960";
async function getWeather() {
  resp = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}=${metropolisZipCode}&aqi=no`
  );
  data = await resp.json();
  getWeatherSpecs(data);
}

function getWeatherSpecs(data) {
  textCondition = data.current.condition.text;
  console.log(textCondition);
  conditionIcon = data.current.condition.icon;
  temp = data.current.temp_f;
  parseInt(temp);
  windMPH = data.current.wind_mph;
  parseInt(windMPH);
  if (temp <= 50 && windMPH > 3) {
    windChill =
      35.74 +
      0.6215 * temp -
      35.75 * windMPH ** 0.16 +
      0.4275(temp)(windMPH ** 0.16);
  } else {
    windChill = "N/A";
  }

  console.log(windChill);

  let weatherSection = document.getElementById("weather-section");
  let conditionIconImg = document.createElement("img");
  conditionIcon.id = "condition-icon";
  conditionIcon.class = "weather-flex-item";
  let tempDiv = document.createElement("div");
  tempDiv.id = "temp-div";
  tempDiv.class = "weather-flex-item";
  let conditionDiv = document.createElement("div");
  conditionDiv.id = "condition-div";
  conditionDiv.class = "weather-flex-item";
  let windMPHDiv = document.createElement("div");
  windMPHDiv.id = "wind-mph-div";
  windMPHDiv.class = "weather-flex-item";
  let windChillDiv = document.createElement("div");
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

  let linkBackDiv = document.createElement("div");
  linkBackDiv.id = "link-back-div";
  let linkBackText = `Powered by <em><a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>`;
  linkBackDiv.innerHTML = linkBackText;
  linkBackText.id = "link-back-text";
  weatherSection.appendChild(linkBackDiv);
  linkBackText.style.fontSize = "1rem";
  linkBackDiv.style.fontSize = "0.5rem";
}

getWeather();
