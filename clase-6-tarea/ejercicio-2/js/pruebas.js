function pruebaDevolverMayor(){
    console.assert(
        devolverMayor([1,2,3]) === 3, "Devolver mayor no está devolviendo el numero mayor."
    )
}

function pruebaDevolverMenor(){
console.assert(
    devolverMenor([1,2,3]) === 1, "Devolver menor no está devolviendo el menor."
)    
}

function pruebaDevolverPromedio(){
console.assert(
    calcularPromedio([2,2,2]) === 2, "Calcular promedio no está retornando el promedio del array."
)    
}

function pruebaDevolverPromedioMensual(){
    console.assert(
        calcularPromedioMensual([2,2,2]) === 2/12, "Calcular promedio no está retornando el promedio mensual del array."
    )    
}

pruebaDevolverMayor();
pruebaDevolverMenor();
pruebaDevolverPromedio();
pruebaDevolverPromedioMensual();

