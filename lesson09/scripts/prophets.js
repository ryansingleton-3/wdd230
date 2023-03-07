const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data)
  }
  
  getProphetData();

const main = document.querySelector("main")
const displayProphets = data => {
    data.prophets.map((prophet) => {
        let card = document.createElement("section")
        main.appendChild(card)
        card.className = "card"
        let prophetH2 = document.createElement("h2")
        card.appendChild(prophetH2)
        prophetH2.innerHTML =`${prophet.name} ${prophet.lastname}`
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        card.appendChild(p1)
        card.appendChild(p2)
        p1.innerHTML = `Birthdate: ${prophet.birthdate}`
        p2.innerHTML = `Birthplace: ${prophet.birthplace}`
        let imgContainer = document.createElement("div")
        card.appendChild(imgContainer)
        imgContainer.className = "img-container"
        image = document.createElement("img")
        imgContainer.appendChild(image)
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
    

        
    })
}