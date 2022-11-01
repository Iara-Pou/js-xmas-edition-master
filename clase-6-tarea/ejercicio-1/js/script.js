function conseguirInputPorValor(valor){
    const $inputs = document.querySelectorAll("input");
    let resultado = [];
    for(let i=0; i<$inputs.length; i++)
        if($inputs[i].value === valor)
            resultado.push($inputs[i]);

    return resultado;
}

function guardaEdadesIntegrantes(nodeList) {
    const arrayNuevo = [];
    for (let i = 0; i < nodeList.length; i++) {
        arrayNuevo[i] = nodeList[i].value;
    }
    return arrayNuevo;
}

function manejarErrores(textoError, input) {
    imprimirErrores(textoError);
    aplicarEstilo(input);
}

function vaciarErroresAnteriores(){
    $ContenedorErrores.innerHTML="";
}

function imprimirErrores(error) {
    $ContenedorErrores.classList = ""

    let textoError = document.createElement("p");
    textoError.textContent = error;
    $ContenedorErrores.appendChild(textoError);

}

function aplicarEstilo(input) {
    if (typeof input.value === "string"){
        input.classList.add("input-error");  
    } else{
        input.forEach(input => input.classList.add("input-error"))
    }
}

function esconderErrores() {
    let $ContenedorErrores = document.querySelector("#errores");
    $ContenedorErrores.classList = "oculto"
}

function crearInputLabels(cantidadIntegrantes) {
    for (let i = 1; i <= cantidadIntegrantes; i++) {
        let labelNuevo = document.createElement("label");
        let inputNuevo = document.createElement("input");

        inputNuevo.placeholder = `integrante ${i}`;
        inputNuevo.classList.add("edad");
        labelNuevo.textContent = `ingresá su edad: `;

        $contenedorInputs.appendChild(labelNuevo);
        labelNuevo.appendChild(inputNuevo);
    }
}

function vaciarContenedorInputs() {
    $contenedorInputs.innerHTML = "";
}

function esconderMensajeFinal() {
    let $mensaje = document.querySelector("#mensaje");
    $mensaje.classList = "oculto";
}

function esconderBotones() {
    $botonCalcular.classList = "oculto";
    $botonReinicio.classList = "oculto";
}

function mostrarBotones() {
    $botonCalcular.classList = " ";
    $botonReinicio.classList = " ";
}

const $botonCantidad = document.querySelector("#boton-cantidad");
const $botonCalcular = document.querySelector("#calculo-edades");
const $botonReinicio = document.querySelector("#reinicio");
const $botonReinicioGeneral = document.querySelector("#reinicio-general");

let $contenedorInputs = document.querySelector("#contenedor-inputs-nuevos");
let $ContenedorErrores = document.querySelector("#errores");

$botonCantidad.onclick = function () {
    vaciarContenedorInputs();

    const cantidadIntegrantes = document.querySelector("#integrantes").value;
    let esExito = validarCantidadIntegrantes(cantidadIntegrantes) === "";

    if (esExito) {

        esconderErrores()
        esconderMensajeFinal()
        
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

    const erroresEdades = {};
    let contadorErrores = 0;

    edadesIntegrantes.forEach(edad => {
        if (validarEdadIntegrante(edad)) {
            erroresEdades[edad] = validarEdadIntegrante(edad);
            contadorErrores++;
        }
    })

    let esExito = contadorErrores === 0;

    if (esExito) {

        esconderErrores();
        esconderBotones();

        document.querySelectorAll(".edad").forEach(elemento => elemento.classList.remove("input-error"));

        $mensaje.classList = "";
        document.querySelector("#edad-mayor").textContent = devolverMayor(edadesIntegrantes);
        document.querySelector("#edad-menor").textContent = devolverMenor(edadesIntegrantes);
        document.querySelector("#edad-promedio").textContent = devolverPromedio(edadesIntegrantes);

    } else {

        esconderMensajeFinal();
        vaciarErroresAnteriores();

        const keysErrores= Object.keys(erroresEdades);

        keysErrores.forEach( key => {
                manejarErrores(erroresEdades[key], conseguirInputPorValor(key))
            }
        ) 

    }

    return false;
}

$botonReinicioGeneral.onclick = function () {

    document.querySelector("#integrantes").value = "";
    esconderBotones();
    vaciarContenedorInputs();
    esconderMensajeFinal();
    esconderErrores();

    return false;
}

