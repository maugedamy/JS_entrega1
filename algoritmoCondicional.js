let userName = prompt("Ingrese nombre de usuario:")
let password = prompt("Ingrese contraseña:")

if (userName == "Eugenia" && password == "Pececitos45!") {
    console.log("Bienvenida nuevamente", userName)
} else {
    console.error("No se reconoce usuario y/o contraseña ingresada.")
}