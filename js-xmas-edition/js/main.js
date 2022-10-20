function validarForm(event) {

    event.preventDefault();

    const nombre = $formulario.nombre.value
    const ciudad = $formulario.ciudad.value;
    const descripcion = $formulario["descripcion-regalo"].value;

    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        "descripcion-regalo": validarDescripcion(descripcion)
    }

    const esExito = manejarErrores(errores) === 0;
    if (esExito) {
        const $mensajeExito = document.querySelector("#exito");
        $mensajeExito.classList = "";

        $formulario.classList = "oculto";
    }
    
}

function manejarErrores(errores) {

    borrarErroresAnteriores();

    const llaves = Object.keys(errores);
    let $contenedorErrores = document.querySelector("#errores");
    let contadorErrores = 0;

    llaves.forEach(llave => {
        const error = errores[llave];
        if (error) {
            contadorErrores++;
            $formulario[llave].className = "error";

            let textoError = document.createElement("li");
            textoError.textContent = error;
            $contenedorErrores.appendChild(textoError);

        } else {
            $formulario[llave].className = ""
        }
    })

    return contadorErrores;

}

function borrarErroresAnteriores(){
    let $contenedorErrores = document.querySelector("#errores");
    $contenedorErrores.textContent = "";
}

const $formulario = document.querySelector("#carta-a-santa");
$formulario.onsubmit = validarForm;

