const getDate = () => {
    let date = new Date
    let input = document.querySelector("#hidden-date")
    input.setAttribute("value", date)
    return date
}

document.querySelector("#join-form").onload(() => {
    getDate()
})
