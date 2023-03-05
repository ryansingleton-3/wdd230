const nav = document.querySelector(".navigation");
const navButton = document.querySelector("#menu");
function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

const imagesToLoad = document.querySelectorAll("img[data-src]")

const options = {
      threshold: 0,
      rootMargin: "0px 0px 50px 0px"
  }

const loadImages = (img) => {
      img.setAttribute("src", img.getAttribute("data-src"))
      img.onload = () => {
          img.removeAttribute("data-src")
          img.className = "in"
      };
  };
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
        }
    });
    }, options)
    imagesToLoad.forEach((img) => {
    observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
    loadImages(img);
    });
}

const fullName = "Ryan Singleton";
const currentYear = new Date().getFullYear();
// const state = "Kentucky"
let eventSpan = document.getElementById("event-span");
let currentDay = new Date().getDay();
let events = false;
const body = document.querySelector("body")
const header = document.querySelector("header");

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
let lastVisitText = document.querySelector("#last-visit");
let currentVisit = new Date()
let lastVisit = localStorage.getItem("lastVisit")
let difference = 0
let lastVisitDays = 0
let oneDay = 1000 * 3600 * 24
if (lastVisit != null) {
    difference = (currentVisit.getTime() - new Date(localStorage.lastVisit))
    lastVisitDays = Math.ceil(difference / oneDay);
}
if (!lastVisit) {
    lastVisitText.innerHTML = "Welcome! This is your first visit."
    localStorage.setItem("lastVisit", new Date)
} else if (difference < 86400000) {
    lastVisitText.innerHTML = `Welcome back! It has been less than a day since your last visit.`
} else if ( difference > 86400000 && difference < 86400000*2) {
    lastVisitText.innerHTML = `Welcome back! It has been 1 day since your last visit.`
} else {
    lastVisitText.innerHTML = `Welcome back! It has been ${lastVisitDays} days since your last visit.`
}

