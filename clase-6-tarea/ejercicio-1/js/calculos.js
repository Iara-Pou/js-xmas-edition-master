function devolverPromedio(array) {
    let totalSuma = 0;
    for (let i = 0; i < array.length; i++) {
        totalSuma += Number(array[i]);
    }
    return totalSuma / array.length;
}

function devolverMenor(array) {
    let numeroMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = Number(array[i]);
        }
    }
    return numeroMenor;
}

function devolverMayor(array) {
    let numeroMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMayor) {
            numeroMayor = Number(array[i]);
        }
    }
    return numeroMayor;
}

function validarCantidadIntegrantes(cantidad){
    
    if (cantidad === ""){
        return "Debe ingresar por lo menos 1 carácter.";
    }

    if(cantidad < 0){
        return "La cantidad debe ser mayor a cero."
    }

    if(! /^[0-9]+$/.test(cantidad)){
        return "La cantidad debe ser un número entero."
    }

    return "";
}

function validarEdadesIntegrantes(edades){

    if (Array.from(edades).includes(0)){
        return "Todos los campos deben tener un valor ingresado."
    }

    if( devolverMenor(edades) < 0){
        return "No debes ingresar ningún número negativo como edad"
    }

    for(let i=0; i<edades.length; i++){
        if(! /^[0-9]+$/.test(edades[i])){
            return "El campo debe tener un número entero ingresado."
        }
    }

    return "";
}

function validarEdadIntegrante(edad){
    
    if (edad <= 0){
        return "Todos los campos deben tener un valor ingresado."
    }

    if(! /^[0-9]+$/.test(edad)){
        return "El campo debe tener un número entero ingresado."
    }

    return "";
}
