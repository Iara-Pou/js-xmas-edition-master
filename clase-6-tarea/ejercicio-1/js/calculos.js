function guardaEdadesIntegrantes(nodeList) {
    const arrayNuevo = [];
    for (let i = 0; i < nodeList.length; i++) {
        arrayNuevo[i] = Number(nodeList[i].value);
    }
    return arrayNuevo;
}

function devolverPromedio(array) {
    let totalSuma = 0;
    for (let i = 0; i < array.length; i++) {
        totalSuma += array[i];
    }
    return totalSuma / array.length;
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

function crearInputLabels(cantidadIntegrantes, elementoPadre) {
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        let labelNuevo = document.createElement("label");
        let inputNuevo = document.createElement("input");

        inputNuevo.placeholder = `integrante ${i}`;
        inputNuevo.classList.add("edad");
        labelNuevo.textContent = `ingresá su edad: `;

        elementoPadre.appendChild(labelNuevo);
        labelNuevo.appendChild(inputNuevo);
    }
}

function vaciarContenedor(){
    $contenedorInputs.innerHTML = "";
}
function vaciarMensaje(){
    let $mensaje = document.querySelector("#mensaje");
    $mensaje.textContent = "";
}
function esconderBotones(){
    $botonCalcular.classList= "oculto";
    $botonReinicio.classList= "oculto";
}
function mostrarBotones(){
    $botonCalcular.classList= " ";
    $botonReinicio.classList= " ";
}

function validarCantidadIntegrantes(cantidad){
    if (cantidad === ""){
        return "Debe ingresar por lo menos 1 carácter.";
    }

    if(cantidad <=0){
        return "la cantidad debe ser mayor a cero."
    }

    return "";
}

function validarEdadesIntegrantes(edades){
    if (edades.includes(0)){
        return "Todos los campos deben tener un valor ingresado."
    }

    if( devolverMenor(edades) < 0){
        return "No debes ingresar ningún número negativo como edad"
    }

    for(let i=0; i<edades.length; i++){
        if(! /^[0-9]$/.test(edades[i])){
            return "El campo debe tener un número ingresado."
        }
    }

    for(let i=0; i<edades.length; i++){
        if(Math.trunc(edades[i]) !== edades[i]){
            return "No debes ingresar ningún número con decimales como edad."
        }
    }

    return "";
}
//el solo hizo mayor, menor y promedio