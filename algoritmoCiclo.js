let entrada = prompt('Ingrese una fruta para su ensalada virtual. Para salir, escriba "BASTA"');

while(entrada != "BASTA") {
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingrese otra fruta o ingrese BASTA para finalizar")
}