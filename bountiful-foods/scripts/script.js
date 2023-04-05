async function getWeather() {
  const APIKey = "dc626a08fd4a1801393e2bfefc1167ff";
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=carlsbad&appid=${APIKey}&units=imperial`
  );
  const data = await res.json();
  console.log(data);

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
  let currentIcon = document.createElement("img");
  currentWDiv.appendChild(currentIcon);
  console.log(data.weather[0].icon);
  currentIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
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

  //   forecast
  let forecastWDiv = document.createElement("div");
  forecastWDiv.setAttribute("id", "forecast-weather-div");
  document.querySelector("#weather-section").appendChild(forecastWDiv);
  console.log(dataF);
  let day1 = dataF.list[4];
  let day2 = dataF.list[12];
  let day3 = dataF.list[20];
  let day1temp = day1.main.temp;
  let day2temp = day2.main.temp;
  let day3temp = day3.main.temp;
  let day1Desc = day1.weather[0].description;
  let day2Desc = day2.weather[0].description;
  let day3Desc = day3.weather[0].description;
  let day1IMG = `https://openweathermap.org/img/wn/${day1.weather[0].icon}@2x.png`;
  let day2IMG = `https://openweathermap.org/img/wn/${day2.weather[0].icon}@2x.png`;
  let day3IMG = `https://openweathermap.org/img/wn/${day3.weather[0].icon}@2x.png`;

  for (i = 1; i < 5; i++) {

    if (i = 2) {
      let dayDiv = document.createElement("div");
      dayDiv.setAttribute("id", `day${i}-div`);
      forecastWDiv.appendChild(dayDiv);
      let forecastIcon = document.createElement("img");
      dayDiv.appendChild(forecastIcon);
      forecastIcon.setAttribute("src", day1IMG);
      let tempDiv = document.createElement("Div");
      forecastWDiv.appendChild(tempDiv);
      tempDiv.innerHTML = `${day1temp}&#176F`;
      let descriptionDiv = document.createElement("Div");
      forecastWDiv.appendChild(descriptionDiv);
      let str1 = data.weather[0].description;
      str1 = str1.split(" ");
      for (var j = 0, x = str1.length; j < x; j++) {
        str1[j] = str[j][0].toUpperCase() + str1[j].substr(1);
      }
      str1 = str1.join(" ");
      desc = str1;
      descriptionDiv.innerHTML = `${desc}`;
    }
  }
  if (i = 3) {
    let dayDiv = document.createElement("div");
    dayDiv.setAttribute("id", `day${i}-div`);
    forecastWDiv.appendChild(dayDiv);
    let forecastIcon = document.createElement("img");
    dayDiv.appendChild(forecastIcon);
    forecastIcon.setAttribute("src", day2IMG);
    let tempDiv = document.createElement("Div");
    forecastWDiv.appendChild(tempDiv);
    tempDiv.innerHTML = `${day2temp}&#176F`;
    let descriptionDiv = document.createElement("Div");
    forecastWDiv.appendChild(descriptionDiv);
    let str2 = data.weather[1].description;
    str2 = str2.split(" ");
    for (var j = 0, x = str2.length; j < x; j++) {
      str2[j] = str[j][0].toUpperCase() + str2[j].substr(1);
    }
    str2 = str2.join(" ");
    desc = str2;
    descriptionDiv.innerHTML = `${desc}`;
  }
  if (i = 4) {
    let dayDiv = document.createElement("div");
    dayDiv.setAttribute("id", `day${i}-div`);
    forecastWDiv.appendChild(dayDiv);
    let forecastIcon = document.createElement("img");
    dayDiv.appendChild(forecastIcon);
    forecastIcon.setAttribute("src", day3IMG);
    let tempDiv = document.createElement("Div");
    forecastWDiv.appendChild(tempDiv);
    tempDiv.innerHTML = `${day3temp}&#176F`;
    let descriptionDiv = document.createElement("Div");
    forecastWDiv.appendChild(descriptionDiv);
    let str3 = data.weather[2].description;
    str3 = str3.split(" ");
    for (var j = 0, x = str3.length; j < x; j++) {
      str3[j] = str[j][0].toUpperCase() + str3[j].substr(1);
    }
    str3 = str3.join(" ");
    desc = str3;
    descriptionDiv.innerHTML = `${desc}`;
  }


}



getWeather();
