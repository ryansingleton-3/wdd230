const input = document.getElementById("favchap")
const submitButton = document.getElementById("submitButton")
const list = document.querySelector("ul")

submitButton.addEventListener("click", (() => {
    if (input.value != null) {
        let addedChapter = document.createElement("li")
        addedChapter.innerHTML = input.value
        list.append(addedChapter)
        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "delete"
        addedChapter.append(deleteButton)
        deleteButton.addEventListener("click", (() => {
            let parent = addedChapter.parentElement
            parent.removeChild(addedChapter)
        }))
        input.focus()
        input.setAttribute("value", "")
        input.setAttribute("placeholder", "")
    } 
}))