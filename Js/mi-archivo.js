/* Declarando variables */
const pantallaValorAnterior = document.getElementById('primervalor');
const pantallaValorActual = document.getElementById('segundovalor');
const botonesNumeros = document.querySelectorAll('.num');
const botonesOperadores = document.querySelectorAll('.operador');
const pantalla = new Pantalla (pantallaValorAnterior, pantallaValorActual);
var entrada;

/*Funcion botones*/
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});

/*Funcion saludar al usuario*/
$(function(){
    let nombre = prompt("Hola por favor ingrese su nombre");
    alert("BIENVENIDO/A " + nombre + " A MI CALCULADORA");
});
// function saludar() {
//     let nombre = prompt("Hola porfavor ingrese su nombre");
//     alert("BIENVENIDO/A " + nombre + " A MI CALCULADORA")
//     return
// }
// saludar();

/* Funcion Mostrar Mensaje de entrada */
$(function(){
    entrada = prompt('Para entrar a la calculadora precione ENTER')
});
// function mostrar() {
//     entrada = prompt('Para entrar a la calculadora precione ENTER')
// }
// mostrar();

