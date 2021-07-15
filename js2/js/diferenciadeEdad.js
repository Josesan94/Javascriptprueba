// algoritmo
// crear variables y obtener su valor
// preguntarme cual de los dos datos es mayor
// hacer la diferencia en el orden correspondiente
// devolver una respuesta

let edad = prompt("cual es tu edad?");
let edad2 = prompt("cual es la edad de tu hno?");
let diferencia = edad - edad2;

if (edad > edad2)
{
    let diferencia = edad - edad2;
    alert("tu hno y tu se llevan " +diferencia+ "años, tu eres el mayor");
}

else if (edad < edad2)
{
    let diferencia = edad2 - edad;
    alert("tu hno y tu se llevan " +diferencia+ "años, tu eres el menor");
}

else if(edad == edad2)
{
    let diferencia = edad -edad2;
    alert("tu y tu hno tienen la misma edad");
}


     
// alert("tu hno y tu se llevan "+ diferencia +"años");
// console.log(edad);