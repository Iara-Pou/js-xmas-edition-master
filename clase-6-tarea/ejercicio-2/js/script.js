function mostrarBotonCalcular(){
    $botonCalcular.classList.remove("oculto");
}

function esconderBotonCalcular(){
    $botonCalcular.classList.add("oculto");
}

function borrarElementos(){
    $contenedor.innerHTML = "";
}

function esconderMensaje(){
    $mensaje.classList.add("oculto");
}

function crearInputLabels(elementoPadre) {

    let labelNuevo = document.createElement("label");
    let inputNuevo = document.createElement("input");

    inputNuevo.classList.add("salario");
    labelNuevo.textContent = `ingresá su salario anual: `;

    elementoPadre.appendChild(labelNuevo);
    labelNuevo.appendChild(inputNuevo);
}

function guardarSalariosEnArray(inputs) {
    const arrayNumeros = [];
    for (let i = 0; i < inputs.length; i++) {
        arrayNumeros[i] = Number(inputs[i].value);
    }
    return arrayNumeros;
}


const $contenedor = document.querySelector("#contenedor-inputs-nuevos")
const $mensaje = document.querySelector("#calculo");

const $botonSumarIntegrante = document.querySelector("#sumar-integrante");
const $botonQuitarIntegrante = document.querySelector("#restar-integrante");
const $botonCalcular = document.querySelector("#calcular-salario");
const $botonReiniciar = document.querySelector("#reiniciar")

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
    esconderMensaje();
    return false;
}

$botonSumarIntegrante.onclick = function () {
    
    if($mensaje.innerHTML!== ""){
        esconderMensaje();
    }

    crearInputLabels($contenedor);
    mostrarBotonCalcular(); 

    return false;
}

$botonCalcular.onclick= function(){
    let salarios = guardarSalariosEnArray(document.querySelectorAll(".salario"));

    let erroresSalarios = {};
    salarios.forEach(salario=>{
        erroresSalarios[salario] = validarSalario(salario);
    })

        $mensaje.classList.remove("oculto");
        document.querySelector("#mayor-salario").textContent = devolverMayor(salarios);
        document.querySelector("#menor-salario").textContent = devolverMenor(salarios);
        document.querySelector("#promedio-salario").textContent = calcularPromedio(salarios);
        document.querySelector("#promedio-mensual-salario").textContent = calcularPromedioMensual(salarios);

        esconderBotonCalcular();

    } else {
        alert("No ingresaste todos los salarios")
    }

    return false;
}
