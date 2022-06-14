const userInput = document.getElementsByTagName('input')
const userOperator = document.querySelector('select')
const firstNumber = userInput[0]
const secondNumber = userInput[1]
const resultHTML = userInput[2]
const buttonHTML = document.getElementById('button')

let result

buttonHTML.addEventListener ("click", () => {
    console.log(userOperator.value)
    if (userOperator.value === "plus") {
        result = parseInt(firstNumber.value) + 
        parseInt(secondNumber.value)
        resultHTML.value = result
    }

    else if (userOperator.value === "minus") {
        result = parseInt(firstNumber.value) - 
        parseInt(secondNumber.value)
        resultHTML.value = result
    }

    else if (userOperator.value === "multi") {
        result = parseInt(firstNumber.value) * 
        parseInt(secondNumber.value)
        resultHTML.value = result
    }
    else {
        result = parseInt(firstNumber.value) / 
        parseInt(secondNumber.value)
        resultHTML.value = result
    }

    resultHTML.innerText = result
} )

