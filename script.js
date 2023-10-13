const formulario = document.getElementById("formCels");
formulario. addEventListener("submit", function(){
    event.preventDefault();

    const temperaturaCelsius = parseFloat(document.getElementById("temperatura").value)

    if ( !isNaN(temperaturaCelsius) ){
        const temperaturaFaren =  convertirFahrenheit(temperaturaCelsius)
        const temperaturaKel = convertirKelvin(temperaturaCelsius)
        const faren = document.getElementById("faren")
        const kelvin = document.getElementById("kelvin")
        faren.innerText = temperaturaFaren + " grados"
        kelvin.innerText= temperaturaKel + " grados"
        console.log(temperaturaFaren)
        console.log(temperaturaKel)

    }else {
        alert ("La temperatura debe ser un número. Por favor intenta nuevamente.")
    }       

});

convertirFahrenheit = (celsius) =>  (celsius * 1.8 +32);
convertirKelvin = (celcius) => (celcius + 273.15)