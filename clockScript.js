const date = new Date()
const hrHTML = document.getElementById('hr')
const minHTML = document.getElementById('min')
const secHTML = document.getElementById('sec')

let seconds
let minutes
let hours

setInterval (() => {
    const date = new Date()
    seconds = date.getSeconds();
    secHTML.innerText = seconds;
    minutes = date.getMinutes();
    minHTML.innerText = minutes;
    hours = date.getHours();
    hrHTML.innerText = hours;
}, 200)