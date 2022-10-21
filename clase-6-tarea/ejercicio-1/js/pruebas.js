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
    devolverPromedio([2,2,2]) === 2, "Calcular promedio no está retornando el promedio del array."
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

    console.assert(
        validarCantidadIntegrantes(1,1) === "La cantidad debe ser un número entero.",
        "validar cantidad integrantes no valida que la cantidad sea un número entero."
    )

    console.assert(
        validarCantidadIntegrantes(1) === "",
        "validar cantidad integrantes no valida un input correcto."
    )
    
}

function pruebaValidarEdadesIntegrantes(){

    console.assert(
        validarEdadesIntegrantes([0,5,60]) === "Todos los campos deben tener un valor ingresado.",
        "validar edades integrantes no filtra que todas las edades tengan un valor ingresado, distinto a 0"
    )

    console.assert(
        validarEdadesIntegrantes([-4,-6,7]) === "No debes ingresar ningún número negativo como edad",
        "validar edades integrantes no valida que las edades sean numeros positivos"
    )

    console.assert(
        validarEdadesIntegrantes([3,3.3,4,"aaaaa"]) === "El campo debe tener un número entero ingresado.",
        "validar edades integrantes no valida que las edades sean numeros y no otro tipo de carácter"
    )

    console.assert(
        validarEdadesIntegrantes([3,22,4]) === "",
        "validar edades integrantes no valida un caso correcto"
    )

}

//para la prueba de pasar un array de otro tipo a number, puedo poner que si ingreso [] con string, tiene que incluir Nan el nuevo, con includes()

pruebaDevolverMayor();
pruebaDevolverMenor();
pruebaDevolverPromedio();
pruebaValidarCantidadIntegrantes();
pruebaValidarEdadesIntegrantes();

