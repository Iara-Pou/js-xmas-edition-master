function devolverPromedio(array) {
    let totalSuma = 0;
    for (let i = 0; i < array.length; i++) {
        totalSuma += Number(array[i]);
    }
    return totalSuma / array.length;
}

function devolverNumeroMenor(numeros) {
    let numeroMenor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < numeroMenor) {
            numeroMenor = Number(numeros[i]);
        }
    }
    return numeroMenor;
}

function devolverNumeroMayor(numeros) {
    let numeroMayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeroMayor) {
            numeroMayor = Number(numeros[i]);
        }
    }
    return numeroMayor;
}

