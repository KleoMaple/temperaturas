function convertir() {
	// Obtener los elementos del DOM necesarios
	var escala1 = document.getElementById("escala1").value;
	var escala2 = document.getElementById("escala2").value;
	var temp1 = parseFloat(document.getElementById("temp1").value);
	var temp2 = document.getElementById("temp2");

	// Realizar la conversión
	var resultado;
	if (escala1 == "celsius"&& escala2 == "fahrenheit") {
        resultado = (temp1 * 1.8) + 32;
    } else if (escala1 == "fahrenheit" && escala2 == "celsius") {
        resultado = (temp1 - 32) / 1.8;
    } else if (escala1 == "celsius" && escala2 == "kelvin") {
        resultado = temp1 + 273.15;
    } else if (escala1 == "kelvin" && escala2 == "celsius") {
        resultado = temp1 - 273.15;
    } else if (escala1 == "fahrenheit" && escala2 == "kelvin") {
        resultado = (temp1 + 459.67) * 5/9;
    } else if (escala1 == "kelvin" && escala2 == "fahrenheit") {
        resultado = (temp1 * 9/5) - 459.67;
    } else {
        resultado = temp1;
    }
    // Mostrar el resultado en la página
    temp2.value = resultado.toFixed(5);
}