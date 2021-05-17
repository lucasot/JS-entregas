function saludar() {
    let nombre = prompt("Hola porfavor ingrese su nombre");
    document.write("Hola " + nombre + "</br>");
    alert("BIENVENIDO/A " + nombre + " A MI CALCULADORA")
    return
}
saludar();

/*
const listaNumeros = [];
let cantidad = 5;

// BUCLE DEL ARRAY

 do{
     let numero = prompt("Ingrese un numero");
     listaNumeros.push(numero);
    console.log(listaNumeros.length);

}while(listaNumeros.length != cantidad);

for (n in listaNumeros) {
    numero = listaNumeros[n] + "<br>";
    document.write(numero  + "<br>");
}
*/


class Cientifica {   

    constructor() {
        this.pi = 3.1416;
        this.iva = 1.21;
        this.r = Number;
    }
    sumaIva() {
        this.iva = this.iva * this.r;
    }

    sumaPi() {
        this.pi = this.pi * this.r;
    }

    calculadora() {


        var numero1 = parseInt(prompt("Ingrese el primer numero"));
        var numero2 = parseInt(prompt("Ingrese el segundo numero"));
        var operacion = prompt("Ingrese la operacion que desea realizar:(+,-,*,/)");

        document.write("Usted ingreso como primer numero: " + numero1 + "</br>");
        document.write("Usted ingreso como segundo numero: " + numero2 + "</br>");
        document.write("Usted ingreso la operacion: " + operacion + "</br>");

        switch (operacion) {
            case "+":
                this.r = numero1 + numero2;
                break;
            case "-":
                this.r = numero1 - numero2;
                break;
            case "*":
                this.r = numero1 * numero2;
                break;
            case "/":
                this.r = numero1 / numero2;
                break;
            default:
                break;
        }
        document.write("El resultado es " + this.r + "</br>");
    }
}

var entrada;

function mostrar() {
    entrada = prompt('Para usar la calculadora presione ENTER, para salir escriba ESC')
}
mostrar();


var calculadora1 = new Cientifica(); // aca llamas a la class para aplicarles sus respectivos metodos.

while (entrada != "ESC") {
    calculadora1.calculadora();
    entrada = prompt("Para seguir realizando operaciones presione ENTER, para ver los resultados escriba ESC");
}

calculadora1.sumaIva();
document.write("El resultado con IVA es: " + calculadora1.iva + "</br>");
calculadora1.sumaPi();
document.write("El resultado multiplicado por pi es: " + calculadora1.pi + "</br>");
