// REALICE UNA CALCULADORA LA CUAL EL USUARIO INGRESA SUS PROPIOS DATOS

// SALUDANDO AL USUARIO
function saludar() {
    let nombre = prompt("Hola porfavor ingrese su nombre");
    document.write("Hola "+ nombre +"</br>");
    alert("BIENVENIDO/A " + nombre + " A MI CALCULADORA") 
    return
}
saludar();

var numero1;
var numero2;
  
function calculadora(numero1, numero2,operacion) {
    
    // DECLARANDO VARIABLES
    var numero1 = parseInt(prompt("Ingrese el primer numero"));
    var numero2 = parseInt(prompt("Ingrese el segundo numero"));
    var operacion =prompt("Ingrese la operacion que desea realizar:(+,-,*,/)");
    var r;
    // LECTURA DE TEXTO EN PANTALLA
    document.write("Usted ingreso como primer numero: " + numero1+"</br>");
    document.write("Usted ingreso como segundo numero: " + numero2+"</br>");
    document.write("Usted ingreso la operacion: "+ operacion+"</br>");

        // SWITCH CALCULADORA
        switch(operacion) {
            case "+":
                r = numero1 + numero2;
                break;
        }
        switch(operacion){
            case "-":
                r = numero1 - numero2;
                break;
        }
        switch(operacion){
            case "*":
                r = numero1 * numero2;
                break;
        }
        switch(operacion){
            case "/":
                r = numero1 / numero2;
                break;
        default:
            break;
        }
    document.write("El resultado es " + r + "</br>");
}
// FUNCION MOSTRAR MENSAJE 
var entrada;

function mostrar() {
    let entrada = prompt('Para usar la calculadora presione ENTER, para salir escriba ESC')
}
mostrar();

// LLAMANDO A FUNCION CALCULADORA

while (entrada != "ESC") {
    calculadora()
entrada = prompt("Para seguir realizando operaciones presione ENTER, para ver los resultados escriba ESC");
}



/* 
// REALICE UN PRONOSTICO DEL CLIMA MUY BASICO

let entrada = prompt("Por favor ingrese un dia de la semana todo en mayusculas: ");
while(entrada!= "ESC"){
    switch(entrada){
        case "LUNES":
        alert("El dia va a estar soleado ");
        break;
        case "MARTES":
        alert("El dia va a estar soleado pero con algunas nubes ");
        break;
        case "MIERCOLES":
        alert("El dia va a estar nublado ");
        break;
        case "JUEVES":
        alert("El dia vamos a tener lluvias ");
        break;
        case "VIERNES":
        alert("El dia vamos a tener lluvias parciales ");
        break;
        case "SABADO":
        alert("El dia va a estar soleado pero con algunas nubes ");
        break;
        case "DOMINGO":
        alert("El dia va a estar soleado ");
        break;
        default:
            alert("EL DIA INGRESADO NO EXISTE!");
            break;
    }
entrada = prompt("Ingrese un dia de la semana y si decia salir escriba ESC");
}
*/ 