function guardaEdadesIntegrantes(nodeList) {
    const arrayNuevo = [];
    for (let i = 0; i < nodeList.length; i++) {
        arrayNuevo[i] = Number(nodeList[i].value);
    }
    return arrayNuevo;
}

function manejarErrores(textoError, input){
    imprimirErrores(textoError);
    aplicarEstilo(input);
}

function imprimirErrores(error){
    let $ContenedorErrores = document.querySelector("#errores");
    $ContenedorErrores.classList=""
    $ContenedorErrores.textContent = error; 
}

function aplicarEstilo(input){
    if(typeof input.value === "string"){
        input.classList = "input-error";
    } else {
        input.forEach(elemento => elemento.classList = "input-error");
    }
}

function esconderErrores(){
    let $ContenedorErrores = document.querySelector("#errores");
    $ContenedorErrores.classList="oculto"   
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

function esconderMensaje(){
    let $mensaje = document.querySelector("#mensaje");
    $mensaje.textContent = "";
    $mensaje.classList = "oculto";

}

function esconderBotones(){
    $botonCalcular.classList= "oculto";
    $botonReinicio.classList= "oculto";
}

function mostrarBotones(){
    $botonCalcular.classList= " ";
    $botonReinicio.classList= " ";
}

const $botonCantidad = document.querySelector("#boton-cantidad");
const $botonCalcular = document.querySelector("#calculo-edades");
const $botonReinicio = document.querySelector("#reinicio");
const $botonReinicioGeneral = document.querySelector("#reinicio-general");

let $contenedorInputs = document.querySelector("#contenedor-inputs-nuevos");

$botonCantidad.onclick = function () {
    vaciarContenedor();
    const cantidadIntegrantes = document.querySelector("#integrantes").value;

    if (!validarCantidadIntegrantes(cantidadIntegrantes)) {

        esconderErrores()
        document.querySelector("#integrantes").classList = "";

        crearInputLabels(cantidadIntegrantes, $contenedorInputs);

        if ($botonCalcular.classList.contains("oculto")) {
        mostrarBotones();
        }

    } else {
        const textoError = (validarCantidadIntegrantes(cantidadIntegrantes));
        manejarErrores(textoError, document.querySelector("#integrantes"));
    }

    return false;
}

$botonCalcular.onclick = function () {

    let $mensaje = document.querySelector("#mensaje");
    let edadesIntegrantes = guardaEdadesIntegrantes(document.querySelectorAll(".edad"));

    if (!validarEdadesIntegrantes(edadesIntegrantes)) {
        esconderErrores();
        document.querySelectorAll(".edad").forEach(elemento => elemento.classList = "");

        $mensaje.classList = "";
        document.querySelector("#edad-mayor").textContent = devolverMayor(edadesIntegrantes);
        document.querySelector("#edad-menor").textContent = devolverMenor(edadesIntegrantes);
        document.querySelector("#edad-promedio").textContent = devolverPromedio(edadesIntegrantes);

    } else {
        esconderMensaje();        

        const textoError= validarEdadesIntegrantes(edadesIntegrantes);
        manejarErrores(textoError, document.querySelectorAll(".edad"));
    }

    return false;
}

$botonReinicioGeneral.onclick = function () {

    document.querySelector("#integrantes").value = "";
    esconderBotones();
    vaciarContenedor();
    esconderMensaje();
    esconderErrores();

    return false;
}

