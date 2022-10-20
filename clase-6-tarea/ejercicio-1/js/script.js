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
        alert(validarCantidadIntegrantes(cantidadIntegrantes))
    }

    return false;
}

$botonCalcular.onclick = function () {
    let $mensaje = document.querySelector("#mensaje");
    let edadesIntegrantes = guardarNumerosEnArray(document.querySelectorAll(".edad"));

    if (!validarEdadesIntegrantes(edadesIntegrantes)) {
        $mensaje.classList = "";

        document.querySelector("#edad-mayor") = devolverMayor(edadesIntegrantes);
        document.querySelector("#edad-menor") = devolverMenor(edadesIntegrantes);
        document.querySelector("#edad-promedio") = devolverPromedio(edadesIntegrantes);

    } else {
        alert(validarEdadesIntegrantes(edadesIntegrantes))
    }

    return false;
}

$botonReinicioGeneral.onclick = function () {

    document.querySelector("#integrantes").value = "";
    esconderBotones();
    vaciarContenedor();
    vaciarMensaje();

    return false;
}

