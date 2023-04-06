const select1 = document.getElementById("options1");
const select2 = document.getElementById("options2");
const select3 = document.getElementById("options3");
const fruitArray = []
if (localStorage.getItem("drinksSubmitted") != null) {
    drinksSubmitted = localStorage.getItem("drinksSubmitted")
} else {
    drinksSubmitted = 0
}

if (drinksSubmitted == 0) {
    drinksSubmittedMsg = "You have not submitted any drinks yet!"
} 
else if (drinksSubmitted == 1) {
    drinksSubmittedMsg = `You have created ${drinksSubmitted} drink so far!`
} else {
    drinksSubmittedMsg = `You have created ${drinksSubmitted} drinks so far!`
}

async function getFruits() {
  let resp = await fetch("../bountiful-foods/json/fruits.json");
  let data = await resp.json();
  fruitArray.push(data)
  addFruit(data);
}

async function addFruit(data) {
  // select options ///////////////////////////////////////
  for (let i = 0; i < data.length; i++) {
    let option = document.createElement("option");
    option.value = data[i].id;
    option.text = data[i].name;
    select1.appendChild(option);
  }
  for (let i = 0; i < data.length; i++) {
    let option = document.createElement("option");
    option.value = data[i].id;
    option.text = data[i].name;
    select2.appendChild(option);
  }
  for (let i = 0; i < data.length; i++) {
    let option = document.createElement("option");
    option.value = data[i].id;
    option.text = data[i].name;
    select3.appendChild(option);
  }
}

getFruits();
const form = document.querySelector("#drink-form");

form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    parseInt(drinksSubmitted)
    drinksSubmitted ++
    localStorage.setItem("drinksSubmitted", drinksSubmitted)
  
    // Get the form data
    const formData = new FormData(e.target);
    let fruit1 = null
    let fruit2 = null
    let fruit3 = null
    let fruit1ID = formData.get('options1')
    let fruit2ID = formData.get('options2')
    let fruit3ID = formData.get('options3')


    fruitArray[0].map((fruit, index) => {
        if (fruit.id == fruit1ID) {
            fruit1 = fruitArray[0][index]
        }
        if (fruit.id == fruit2ID) {
            fruit2 = fruitArray[0][index]
        }
        if (fruit.id == fruit3ID) {
            fruit3 = fruitArray[0][index]
        }
    })

    // "nutritions": {
    //     "carbohydrates": 8,
    //     "protein": 0,
    //     "fat": 0,
    //     "calories": 34,
    //     "sugar": 8
    //   }
  
    let newfruitArray = []
    newfruitArray.push(fruit1, fruit2, fruit3)
    carbsTotal = 0
    proteinTotal = 0;
    fatTotal = 0;
    caloriesTotal = 0
    sugarTotal = 0

    newfruitArray.map((fruit) => {
        carbsTotal = carbsTotal + parseInt(fruit.nutritions.carbohydrates)
        proteinTotal = proteinTotal + parseInt(fruit.nutritions.protein)
        fatTotal = fatTotal + parseInt(fruit.nutritions.fat)
        caloriesTotal = caloriesTotal + parseInt(fruit.nutritions.calories)
        sugarTotal = sugarTotal + parseInt(fruit.nutritions.sugar)
    })


    // Create a new div element
    const div = document.createElement('div');
    div.setAttribute("id", "submit-message")
  
    // Set the div's innerHTML to the form data
    div.innerHTML = `Name: ${formData.get('fname')}<br>Email: ${formData.get('email')} <br>Phone: ${formData.get('phone')}<br>Your fruit choices are
    ${fruit1.name}, ${fruit2.name}, and ${fruit3.name}! <br> Special Instructions: ${formData.get('comments')}<br> Total Carbohydrates: ${carbsTotal} <br> Total Protein: ${proteinTotal} <br> Total Fat:
     ${fatTotal} <br> Total Calories: ${caloriesTotal} <br> Total Sugar: ${sugarTotal}`;
  
    // Append the new div to the result div on the page
    document.getElementById('result').appendChild(div);

    document.querySelector("#submit-message").scrollIntoView({ behavior: "smooth" });
    if (localStorage.getItem("drink1") == null) {
        localStorage.setItem("drink1", `${fruit1.name}, ${fruit2.name}, and ${fruit3.name}`)
    }    
    else if (localStorage.getItem("drink2") == null) {
        localStorage.setItem("drink2", `${fruit1.name}, ${fruit2.name}, and ${fruit3.name}`)
    } 
    else
        localStorage.setItem("drink3", `${fruit1.name}, ${fruit2.name}, and ${fruit3.name}`)
    
    
  });
