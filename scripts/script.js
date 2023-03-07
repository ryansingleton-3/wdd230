const fullName = "Ryan Singleton"
const currentYear = new Date().getFullYear()
const state = "Kentucky"
let lastUpdated = `${new Date(document.lastModified)}`;

footerLineOne = `${currentYear} | ${fullName} | ${state} <br>`
footerLineTwo = `Last Updated: ${lastUpdated}`

document.querySelector("#footer-info1").innerHTML = footerLineOne
document.querySelector("#footer-info2").innerHTML = footerLineTwo