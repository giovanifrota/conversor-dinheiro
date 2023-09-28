const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value")//Valor em Dolar
    const currencyValueToConvertedLibra = document.querySelector(".currency-value-libra")//Valor em Libra

    const dolarToday = 4.0
    const euroToday = 5.2
    const libraToday = 6.2
    const bitcoinToday = 132.5


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
    if(currencySelect.value == "libra"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency/libraToday)
    }
    if(currencySelect.value == "bitcoin"){
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{
            styçe:"currency",
            currency:"BTC"
        }).format(inputCurrency/bitcoinToday)
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
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "img/libra.jpg"
        currencyImage.width = "100"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "img/bitcoin.jpg"
        currencyImage.width = "100"
    }

    

    convertValues()

}


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)