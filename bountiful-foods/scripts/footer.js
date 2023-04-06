let lastUpdated = `Last Modified: ${new Date(document.lastModified)}`;
let div = document.createElement("div")
let span = document.createElement("span")
span.innerHTML = lastUpdated
document.querySelector("#last-updated").appendChild(div)
div.appendChild(span)
span.style.textAlign = "center"
div.style.marginBottom = "3%"