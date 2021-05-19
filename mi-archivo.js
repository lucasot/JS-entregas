function saludar() {
    let nombre = prompt("Hola porfavor ingrese su nombre");
    document.write("Hola " + nombre + "</br>");
    alert("BIENVENIDO/A " + nombre + " A MI CALCULADORA")
    return
}
saludar();

const n1 = [];
const n2 = [];
const resultados = [];

let cantidad = 5;

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

        
        let numero1 = parseInt(prompt("Ingrese el primer numero"));
        n1.push(numero1);
        console.log(n1.length);
        let numero2 = parseInt(prompt("Ingrese el segundo numero"));
        n2.push(numero2);
        console.log(n2.length);
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
        resultados.push[this.r];
    }
}

var entrada;

function mostrar() {
    entrada = prompt('Para usar la calculadora presione ENTER, para salir escriba ESC')
}
mostrar();


var calculadora1 = new Cientifica();

while (entrada != "ESC" || entrada != "esc" ||  entrada != "Esc") { // no me funciona el while!!!
    calculadora1.calculadora();
    entrada = prompt("Para seguir realizando operaciones presione ENTER, para ver los resultados escriba ESC");
}

calculadora1.sumaIva();
document.write("El resultado con IVA es: " + calculadora1.iva + "</br>");
calculadora1.sumaPi();
document.write("El resultado multiplicado por pi es: " + calculadora1.pi + "</br>");
