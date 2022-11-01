function calcularPromedio(numeros) {
    let totalSuma = 0;
    let contador= 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]!==0){
            totalSuma += numeros[i];
            contador++;
        }
    }
    return totalSuma / contador;
}

function calcularPromedioMensual(array) {
    const MESES_EN_UN_ANIO = 12;
    return calcularPromedio(array) / MESES_EN_UN_ANIO;
}

function devolverNumeroMenor(numeros) {
    let numeroMenor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < numeroMenor) {
            numeroMenor = numeros[i];
        }
    }
    return numeroMenor;
}

function devolverNumeroMayor(numeros) {
    let numeroMayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
        }
    }
    return numeroMayor;
}

function validarSalario(salario){
    if(salario === ""){
        return "Todos los campos deben estar completos.";
    }

    if(salario <=0){
        return "El campo debe ser mayor a 0.";
    }

    if(! /^[0-9]+$/.test(Math.trunc(salario))){
        return "El campo debe ser un número.";
    }

    return "";
}
