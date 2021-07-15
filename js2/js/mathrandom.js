document.write('ejercicio de dados');
//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 5 veces esta operación. El lanzamiento será para cada jugador por turno tenemos que tener 3 jugadores, al final se deberá hacer una suma.

let resultados = [];
let suma= 0;




for(let i=0; i < 5; i++) {
    document.write(Math.trunc((Math.random()) * 6) + 1);
}

    