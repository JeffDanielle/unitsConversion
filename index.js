/*
1 meter = 3.2808 feet
1 foot = 0.3048 meter
1 liter = 0.264 gallon
1 gallon = 3.78541 liter
1 kilogram = 2.204 pound
1 pound = 0.453592 kg
*/

let inputText = document.getElementById("input-field")
let lenText = document.getElementById("length")
let litText = document.getElementById("liters")
let kilText = document.getElementById("kilos")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    lengthsConversion(inputText)
    volumeConversion(inputText)
    massConversion(inputText)
    parseFloat(inputText.value = "")
})

function lengthsConversion(len){
    let metersToFeet = `${inputText.value} meters = ${(len.value * 3.2808).toFixed(3)} feet`
    let feetToMeters = `${inputText.value} feet = ${(len.value * 0.3048).toFixed(3)} meters`
    lenText.textContent = ` ${metersToFeet} | ${feetToMeters}`
}

function volumeConversion(len){
    let litersToGallon = `${inputText.value} liters = ${(len.value * 0.2642).toFixed(3)} gallons`
    let gallonToLiters = `${inputText.value} gallons = ${(len.value * 3.7854).toFixed(3)} liters`
    litText.textContent = ` ${litersToGallon} | ${gallonToLiters}`
}

function massConversion(len){
    let litersToGallon = `${inputText.value} kilograms = ${(len.value * 2.2046).toFixed(3)} pounds`
    let gallonToLiters = `${inputText.value} pounds = ${(len.value * 0.4536).toFixed(3)} kilograms`
    kilText.textContent = ` ${litersToGallon} | ${gallonToLiters}`
}