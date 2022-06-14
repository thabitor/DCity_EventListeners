const numberHTML = document.getElementById('number')
const incrementButtonHTML = document.getElementById('plus')
const decrementButtonHTML = document.getElementById('minus')

const newIncrementValue = parseInt(window.prompt("Entrez une valeur"))

    incrementButtonHTML.innerText = `Increment + ${newIncrementValue}`
    decrementButtonHTML.innerText = `Decrement - ${newIncrementValue}`

    incrementButtonHTML.addEventListener("click", (e) => {
        numberHTML.innerText = parseInt(numberHTML.textContent)+newIncrementValue;
    })

    decrementButtonHTML.addEventListener("click", () => {
        numberHTML.innerText = parseInt(numberHTML.textContent)-newIncrementValue;
    })


// incrementButtonHTML.addEventListener("click", () => {
//     numberHTML.innerText = parseInt(numberHTML.textContent)+1;
// })

// decrementButtonHTML.addEventListener("click", () => {
//     numberHTML.innerText = parseInt(numberHTML.textContent)-1;
// })


