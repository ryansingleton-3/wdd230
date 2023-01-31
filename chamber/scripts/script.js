
const nav = document.querySelector('.navigation')
const navButton = document.querySelector('#menu');
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


const fullName = "Ryan Singleton"
const currentYear = new Date().getFullYear()
// const state = "Kentucky"
const lastUpdated = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`

footerLineOne = `&#169; ${currentYear} Metropolis Chamber <br>`
footerLineTwo = `${fullName} <br>`
footerLineThree = `WDD 230 Project <br>`
footerLineFour = `Last Modification: ${lastUpdated}`

document.querySelector("#footer-info1").innerHTML = footerLineOne
document.querySelector("#footer-info2").innerHTML = footerLineTwo
document.querySelector("#footer-info3").innerHTML = footerLineThree
document.querySelector("#footer-info4").innerHTML = footerLineFour
let day = new Date().toDateString()
let dayText = document.querySelector("#date-text")
dayText.innerHTML = `${day}`
console.log(dayText);