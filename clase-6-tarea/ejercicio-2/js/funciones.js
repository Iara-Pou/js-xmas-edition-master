


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
