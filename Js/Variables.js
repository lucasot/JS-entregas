/* Declarando variables */
const pantallaValorAnterior = document.getElementById('primervalor');
const pantallaValorActual = document.getElementById('segundovalor');
const botonesNumeros = document.querySelectorAll('.num');
const botonesOperadores = document.querySelectorAll('.operador');
const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);

/*Funcion botones*/
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});

/*Funcion slice*/
$(document).ready(function () {
    $('#toggle').click(function () {
        $('.calculadora').slideToggle(1000);
    });
});