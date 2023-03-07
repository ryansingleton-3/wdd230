const getDate = () => {
    let date = new Date
    let input = document.querySelector("#hidden-date")
    input.setAttribute("value", date)
    return date
}

const form = document.querySelector("form")
form.onload(getDate())