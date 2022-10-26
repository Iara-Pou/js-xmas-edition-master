const $contenedor = document.querySelector("#contenedor-inputs-nuevos")
const $mensaje = document.querySelector("#calculo");

const $botonSumarIntegrante = document.querySelector("#sumar-integrante");
const $botonQuitarIntegrante = document.querySelector("#restar-integrante");
const $botonCalcular = document.querySelector("#calcular-salario");
const $botonReiniciar = document.querySelector("#reiniciar")

function mostrarBotonCalcular(){
    $botonCalcular.classList.remove("oculto");
}

function esconderBotonCalcular(){
    $botonCalcular.classList.add("oculto");
}

function borrarElementos(){
    $contenedor.innerHTML = "";
}


$botonQuitarIntegrante.onclick = function () {
    $contenedor.removeChild($contenedor.lastChild);
        if($contenedor.innerHTML === ""){
            esconderBotonCalcular();
        }
    return false;
}

$botonReiniciar.onclick = function () {
    borrarElementos();
    esconderBotonCalcular();
    return false;
}

$botonSumarIntegrante.onclick = function () {
    crearInputLabels($contenedor);
    mostrarBotonCalcular(); 

    return false;
}

function crearInputLabels(elementoPadre) {
    let labelNuevo = document.createElement("label");
    let inputNuevo = document.createElement("input");

    inputNuevo.classList.add("salario");
    labelNuevo.textContent = `ingresá su salario anual: `;

    elementoPadre.appendChild(labelNuevo);
    labelNuevo.appendChild(inputNuevo);
}

$botonCalcular.onclick= function(){
    let salarios = guardarSalariosEnArray(document.querySelectorAll(".salario"));

    if(devolverMayor(salarios)!==0 && devolverMenor(salarios)!==0){

        $mensaje.classList.remove("oculto");
        document.querySelector("#mayor-salario").textContent = devolverMayor(salarios);
        document.querySelector("#menor-salario").textContent = devolverMenor(salarios);
        document.querySelector("#promedio-salario").textContent = calcularPromedio(salarios);
        document.querySelector("#promedio-mensual-salario").textContent = calcularPromedioMensual(salarios);

        esconderBotonCalcular();
        borrarElementos();

    } else {
        alert("No ingresaste todos los salarios")
    }

    return false;
}

function guardarSalariosEnArray(inputs) {
    const arrayNumeros = [];
    for (let i = 0; i < inputs.length; i++) {
        arrayNumeros[i] = Number(inputs[i].value);
    }
    return arrayNumeros;
}

