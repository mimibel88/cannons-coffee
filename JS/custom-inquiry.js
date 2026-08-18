const form = document.querySelector("#form")

function onFormSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())

    console.log(dataObject)

    const interest = dataObject.buyOrWork === "buy" ? "buying coffee" : "seeking employment"

    const message = `Thank you ${dataObject.yourname}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${dataObject.flavor} and your comments are ${dataObject.comments}. We will soon contact you at ${dataObject.email} or ${dataObject["phoneNumber"]}.`

    const thankYouMessage = document.querySelector("#thank-you")
    thankYouMessage.textContent = message
    thankYouMessage.classList.remove("hidden")

    form.reset()
}

form.addEventListener("submit", onFormSubmit)