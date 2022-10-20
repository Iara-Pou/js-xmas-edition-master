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

function pruebaValidarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes("") === "Debe ingresar por lo menos 1 carácter.", 
        "validar cantidad integrantes no valida el caso en el que el usuario no ingresa nada al input."
    )

    console.assert(
        validarCantidadIntegrantes(-1) === "la cantidad debe ser mayor a cero.",
        "validar cantidad integrantes no valida que la cantidad sea un número positivo."
    )
}

function pruebaValidadEdadesIntegrantes(){

    console.assert(
        validarEdadesIntegrantes([0,5,60]) === "Todos los campos deben tener un valor ingresado.",
        "validar edades integrantes no filtra que todas las edades tengan un valor ingresado, distinto a 0"
    )

    console.assert(
        validarEdadesIntegrantes([-4,-6,7]) === "No debes ingresar ningún número negativo como edad",
        "validar edades integrantes no valida que las edades sean numeros positivos"
    )

    console.assert(
        validarEdadesIntegrantes([3,4,3.3]) === "No debes ingresar ningún número con decimales como edad.",
        "validar edades integrantes no valida que las edades sean numeros enteros"
    )
}

//para la prueba de pasar un array de otro tipo a number, puedo poner que si ingreso [] con string, tiene que incluir Nan el nuevo, con includes()

pruebaDevolverMayor();
pruebaDevolverMenor();
pruebaDevolverPromedio();
pruebaValidarCantidadIntegrantes();
pruebaValidadEdadesIntegrantes();

