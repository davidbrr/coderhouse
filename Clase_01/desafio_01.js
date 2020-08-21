
//Clase 01 | sintaxis y variables

//1. declaro una variable y mediante prompt capturo ese dato
var name = prompt("😊 hola cual es tu nombre ");

//imprimo el nombre capturado en consola llamando la variable name
console.log("1. El nombre que ingresaste es: " + name);


//2. Pedir un numero y parsearlo
var number2 = 10;
var number =prompt("🔢 Ingresa un número: ");

console.log("Ingresaste el número " + number);

//Parseando el número (convertirlo de texto a número)
number =parseInt(number);

console.log(number);
//Suma de número ingresado + almacenado
console.log("la suma de tu número mas el almacenado es \n"+ (number + number2) );


//3. Concatenar textos y mostrar en un alert
//capturo los textos mediante un prompt
var textoA = prompt("ingresa tu Pais");
var textoB = prompt("ingresa tu ocupación");

//muestro la info concatenada en un alert
alert("tu pais es " + textoA + " y tu ocupación es " + textoB);

