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
        validarCantidadIntegrantes(-1) === "La cantidad debe ser mayor a cero.",
        "validar cantidad integrantes no valida que la cantidad sea un número positivo."
    )

    console.assert(
        validarCantidadIntegrantes(1.1) === "La cantidad debe ser un número entero.",
        "validar cantidad integrantes no valida que la cantidad sea un número entero."
    )

    console.assert(
        validarCantidadIntegrantes(1) === "",
        "validar cantidad integrantes no valida un input correcto."
    )
    
}




}

//para la prueba de pasar un array de otro tipo a number, puedo poner que si ingreso [] con string, tiene que incluir Nan el nuevo, con includes()

pruebaDevolverMayor();
pruebaDevolverMenor();
pruebaDevolverPromedio();
pruebaValidarCantidadIntegrantes();
pruebaValidarEdadIntegrante();

