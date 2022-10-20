const $botonCantidad = document.querySelector("#boton-cantidad");
const $botonCalcular = document.querySelector("#calculo-edades");
const $botonReinicio = document.querySelector("#reinicio");
const $botonReinicioGeneral = document.querySelector("#reinicio-general");

let $contenedorInputs = document.querySelector("#contenedor-inputs-nuevos");


$botonCantidad.onclick = function () {
    vaciarContenedor();

    const cantidadIntegrantes = document.querySelector("#integrantes").value;

    if (cantidadIntegrantes>0 && cantidadIntegrantes !=="") {
        crearInputLabels(cantidadIntegrantes, $contenedorInputs);

        if ($botonCalcular.classList.contains("oculto")) {
        mostrarBotones();
        }

    } else {
        imprimirErrores(validarCantidadIntegrantes(cantidadIntegrantes))
    }

    return false;
}

$botonCalcular.onclick = function () {
    let $mensaje = document.querySelector("#mensaje");
    let edadesIntegrantes = guardaEdadesIntegrantes(document.querySelectorAll(".edad"));

    if (!validarEdadesIntegrantes(edadesIntegrantes)) {
        $mensaje.classList = "";

        document.querySelector("#edad-mayor").textContent = devolverMayor(edadesIntegrantes);
        document.querySelector("#edad-menor").textContent = devolverMenor(edadesIntegrantes);
        document.querySelector("#edad-promedio").textContent = devolverPromedio(edadesIntegrantes);

    } else {
        imprimirErrores(validarEdadesIntegrantes(edadesIntegrantes))
    }

    return false;
}

function imprimirErrores(error){
    let $ContenedorErrores = document.querySelector("#errores");
    $ContenedorErrores.textContent = error; 
}

$botonReinicioGeneral.onclick = function () {

    document.querySelector("#integrantes").value = "";
    esconderBotones();
    vaciarContenedor();
    vaciarMensaje();

    return false;
}

