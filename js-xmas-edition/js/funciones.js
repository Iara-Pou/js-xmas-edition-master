function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter.';
    }

    if (nombre.length > 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if(!/^[A-z]+$/.test(nombre)){
        return "Este campo debe tener solo letras";
    }

    return "";
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return 'Debés seleccionar una provincia.'
    }

    return "";
}

function validarDescripcion(descripcion) {
    if (descripcion.length >= 100){
        return "Tu descripción no debe contener más que 100 carácteres."
    }

    if(descripcion.length === 0){
        return "No ingresaste tu pedido."
    }
    
    if(!/^[A-z0-9]+$/.test(descripcion)){
        return "Tu pedido debe contener solo números y letras"
    }
    
    return "";
}


