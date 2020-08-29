
var dias =["lunes","martes","miercoles","jueves","viernes","sábado","domingo","lunae","martis","mercuri"]

/*
function sumar(){
    var a = parseInt(prompt("ingresa un número"));
    var b = parseInt(prompt("ingresa otro"));
    console.log(a+b);
}
*/

function semana(){
    //console.log(dias)
    
    for (var i=0; i< dias.length; i++){
        //en el siguiente console recorro el array
        //console.log(i +" " + dias[i])

        //condicional día 7
        if (i==6){
            alert("llegamos a el último día 🌈 " + i + " " + dias[i])
        }     

        //en este if estoy clasificando los pares
        if(i%2==0){
            console.log(i + " " +  dias[i]  + " es par")
        }   else{
            console.log(i + " es impar")
        }
    }
}