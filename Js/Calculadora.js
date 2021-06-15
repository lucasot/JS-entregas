/*Clase calculadora y sus metodos*/
class Calculadora {
    constructor(){
        this.pi = 3,1416;
        this.iva = 1.21;
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
