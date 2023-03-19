const spotlightDiv = document.querySelector("#spotlight-div");
const spotlight1 = document.querySelector("#spotlight1");
const spotlight2 = document.querySelector("#spotlight2");
const spotlight3 = document.querySelector("#spotlight3");

async function getMembers() {
  let resp = await fetch("../chamber/json/data.json");
  let data = await resp.json();
  addSpotlights(data);
}

function addSpotlights(data) {
    let goldMembers = [];
    data.members.map((member) => {
    if (member.level == "Gold") {
      goldMembers.push(member);
    }
    });

    let position1Index = Math.floor(Math.random()* 3)
    let member1 = goldMembers[position1Index]
    let goldMembers2 = goldMembers
    goldMembers2.splice(position1Index,1)
    

    let position2Index = Math.floor(Math.random()* 2)
    let member2 = goldMembers2[position2Index]
    let goldMembers3 = goldMembers2
    goldMembers3.splice(position2Index,1)

    let member3 = goldMembers3[0]

    document.querySelector("#spotlight1-img").setAttribute("src", member1.image)
    document.querySelector("#spotlight2-img").setAttribute("src", member2.image)
    document.querySelector("#spotlight3-img").setAttribute("src", member3.image)

    document.querySelector("#name1").innerHTML = member1.name
    document.querySelector("#name2").innerHTML = member2.name
    document.querySelector("#name3").innerHTML = member3.name

    document.querySelector("#phone1").innerHTML = member1.phone
    document.querySelector("#phone2").innerHTML = member2.phone
    document.querySelector("#phone3").innerHTML = member3.phone
}

getMembers()
