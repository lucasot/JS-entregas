/*Clase calculadora y sus metodos*/
// Revisar iva y pi no funcionan, Prom todavia no lo agregue

class Calculadora {
    constructor(){
        this.pi = 3,1416;
        this.iva = 1.21;
        // this.resultado = resultado;lu
    }
    sumar (num1,num2){
        return num1 + num2;
    }
    restar (num1,num2){
        return num1 - num2;
    }
    multiplicar (num1,num2){
        return num1 * num2;
    }
    dividir (num1,num2){
        return num1 / num2;
    } 
    iva() {
        return this.iva * num1 ;
    }
    pi() {
        return this.pi * num1;
    }

}
