//estructuras if
// == es igual a
// != es distinto a
/*
var nombre="";

name= prompt("ingresa tu nombre");

if (nombre !=""){
    console.log("tu nombre es " + name);
}else{
    console.log("tienes que dejar tu nombre");
}
*/

//Desafío 02
//1. pedir numero mediante promp y si es mayor a 1000 mostra un alert

var number;

number =prompt("1. ingresa un número");

if (number > 1000){
    alert("tu número es mayor a 1000");
}


//2. pedir texto mediante prompt y si es igual a "hola" mostrar un alert por console

var texto;

texto =prompt("2. ingresa un texto");
if(texto =="Hola"){
    console.log("escribiste Hola");
}

//3. Pedir un numero y evaluar si esta entre 10 y 50, en caso positivo mostrar un alert

var numberB;
numberB =prompt("3. ingresa un número");

if(numberB < 50 && numberB > 10){
    alert("tu número esta entre 10 y 50");
}