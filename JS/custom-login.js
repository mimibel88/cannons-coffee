const form = document.querySelector("#form")

function onFormSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())

    console.log(dataObject)

    const message = `Welcome ${dataObject.username}! You have successfully logged in with ${dataObject.email}.`

    const thankYouMessage = document.querySelector("#thank-you")
    thankYouMessage.textContent = message
    thankYouMessage.classList.remove("hidden")

    form.reset()
}

form.addEventListener("submit", onFormSubmit)