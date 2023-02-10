import { getWeather, getWeatherSpecs } from "./windchill.js";

const nav = document.querySelector(".navigation");
const navButton = document.querySelector("#menu");
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

const fullName = "Ryan Singleton";
const currentYear = new Date().getFullYear();
// const state = "Kentucky"
let eventSpan = document.getElementById("event-span");
let currentDay = new Date().getDay();
let events = false;
const body = document.querySelector("body")
body.onload = onLoad()
function onLoad() {
  getWeather()
  let lastUpdated = `${new Date(document.lastModified)}`;
  const footerLineOne = `&#169; ${currentYear} Metropolis Chamber <br>`;
  const footerLineTwo = `${fullName} <br>`;
  const footerLineThree = `WDD 230 Project <br>`;
  const footerLineFour = `Last Modification: ${lastUpdated}`;
  document.querySelector("#footer-info1").innerHTML = footerLineOne;
  document.querySelector("#footer-info2").innerHTML = footerLineTwo;
  document.querySelector("#footer-info3").innerHTML = footerLineThree;
  document.querySelector("#footer-info4").innerHTML = footerLineFour;
  let day = new Date().toDateString();
  let dayText = document.querySelector("#date-text");
  dayText.innerHTML = `${day}`;
  currentDay == 1 || currentDay == 2 ? (events = true) : (events = false);
  if (events == true) {
    eventSpan.innerHTML = "🤝🏼 Chamber Meet and Greet - Wednesday at 7pm";
    eventSpan.style.fontSize = "2.5rem";
    eventSpan.style.textAlign = "center";
    document.querySelector("body").style.display = "flex";
    document.querySelector("body").style.flexWrap = "wrap";
    document.querySelector("body").style.flexDirection = "column";
    const bannerElement = document.createElement("div");
    const announcement = document.createElement("p");
    body = document.querySelector("body");
    header = document.querySelector("header");
    body.insertBefore(bannerElement, body.header);
    bannerElement.appendChild(announcement);
    announcement.innerHTML =
      "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    bannerElement.style.border = "1px solid black";
    bannerElement.style.margin = "0 auto";
    bannerElement.style.width = "100%";
    bannerElement.style.backgroundColor = "#002349";
    announcement.style.color = "white";
    announcement.style.textAlign = "center";
    bannerElement.style.order = "-1";
    bannerElement.style.marginBottom = "1%";
  } else {
    eventSpan.innerHTML =
      "Become a member and receive email updates for upcoming events";
    eventSpan.style.fontSize = "2rem";

    
  }
};


