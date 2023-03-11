

async function getMembers() {
    let resp = await fetch("../chamber/json/data.json")
    let data = await resp.json()
    addMembers(data)
}

function addMembers(data) {
    data.members.map((member) => {
        let card = document.createElement("section")
        if (document.querySelector("#directory-div").className == "grid-view") {
            card.setAttribute("class", "grid-card")
        } else if (document.querySelector("#directory-div").className == "list-view") {
            card.setAttribute("class", "list-card")
        }
        
        document.querySelector("#directory-div").appendChild(card)
        
        let img = document.createElement("img")
        let imgDiv = document.createElement("div")
        let nameP = document.createElement("p")
        let addressP = document.createElement("p")
        let phoneP = document.createElement("p")
        let websiteP = document.createElement("p")
        let urlA = document.createElement("a")
        let levelP = document.createElement("p")
        
        
        card.appendChild(imgDiv)
        imgDiv.appendChild(img)
        card.appendChild(nameP)
        card.appendChild(addressP)
        card.appendChild(phoneP)
        card.appendChild(websiteP)
        websiteP.appendChild(urlA)
        card.appendChild(levelP)
        
        
        img.setAttribute("src", member.image)
        img.setAttribute("alt", `${member.name} Logo`)
        // img.style.maxWidth = "100%"
        // img.style.maxHeight = "30%"
        nameP.innerHTML = member.name
        addressP.innerHTML = member.address
        phoneP.innerHTML = member.phone
        urlA.innerHTML = "Website"
        urlA.setAttribute("href", member.website) 
        levelP.innerHTML = `Level: ${member.level}`

        
        // urlA.style.color = "blue"
        // urlA.style.textDecoration = "underline"
        // imgDiv.style.marginTop = "2%"
        // levelP.style.marginBottom = "2%"


    })
}

getMembers()

document.querySelector("#grid-button").addEventListener("click", e => {
    if (document.querySelector(".list-card")) {
        for (let i = 0; i < 9; i++) {
            document.querySelector(".list-card").classList.add("grid-card")
            document.querySelector(".list-card").classList.remove("list-card")
        }
    }
    document.querySelector("#directory-div").classList.remove("list-view");
    document.querySelector("#directory-div").classList.add("grid-view");
})
document.querySelector("#list-button").addEventListener("click", e => {
    if (document.querySelector(".grid-card")) {
        for (let i = 0; i < 9; i++) {
            document.querySelector(".grid-card").classList.add("list-card")
            document.querySelector(".grid-card").classList.remove("grid-card")
        }
    }
    document.querySelector("#directory-div").classList.remove("grid-view");
    document.querySelector("#directory-div").classList.add("list-view");
})