function calcularPromedio(array) {
    let totalSuma = 0;
    let contador= 0;
    
    for (let i = 0; i < array.length; i++) {
        if(array[i]!==0){
            totalSuma += array[i];
            contador++;
        }
    }
    return totalSuma / contador;
}

function calcularPromedioMensual(array) {
    return calcularPromedio(array) / 12;
}

function devolverMenor(array) {
    let numeroMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = array[i];
        }
    }
    return numeroMenor;
}

function devolverMayor(array) {
    let numeroMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroMayor) {
            numeroMayor = array[i];
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

    if(!/^[0-9]$/.test(Math.trunc(salario))){
        return "El campo debe ser un número.";
    }

    return "";
}
