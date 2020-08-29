function calcular () {
    
    var numero1 = parseInt(prompt("ingresa numero"))
    var numero2 = parseInt(prompt("ingresa numero 2"))
    //var resultado= numero1 +numero2
    sumar (numero1, numero2);
    promediar(numero1, numero2);
   
}

function sumar (n1,n2){

    console.log("la suma es " +(n1 + n2))
}

function promediar(n1,n2){
    console.log("el promedio es" + (n1+n2)/2)
}








/*
Ejemplo
function calcular () {
    numero1=parseInt(prompt("Ingrese un númerillo"));
    numero2=parseInt(prompt("Ingrese otro númerillo"));
    
    sumar (numero1,numero2);
    promedio (numero1,numero2);
}

function sumar (n1,n2) {
    console.log("La suma de los números ingresados es: " +(n1+n2));
}

function promedio(n1,n2){
    console.log("El promedio de los números es: " +(n1+n2)/2);
}
*/
