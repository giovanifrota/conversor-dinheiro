const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value")//Valor em Dolar


    const dolarToday = 4.0
    const euroToday = 5.2


    if(currencySelect.value == "dolar"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
         }).format(inputCurrency/dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency/euroToday)
    }

     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
     }).format(inputCurrency)
    
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "img/usa.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "img/euro (1).png"
    }

    convertValues()

}


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)