const $contenedor = document.querySelector("#contenedor-inputs-nuevos")

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

$botonSumarIntegrante.onclick = function () {
    crearInputLabels($contenedor);
    mostrarBotonCalcular(); 

    return false;
}

$botonQuitarIntegrante.onclick = function () {
    $contenedor.removeChild($contenedor.lastChild);
        if($contenedor.innerHTML === ""){
            esconderBotonCalcular();
        }
    return false;
}

$botonReiniciar.onclick = function () {
    $contenedor.innerHTML="";
    esconderBotonCalcular();
    return false;
}

$botonCalcular.onclick= function(){
    const $mensaje = document.querySelector("#calculo");
    let salarios = guardarNumerosEnArray(document.querySelectorAll(".salario"));

    if(devolverMayor(salarios)!==0 && devolverMenor(salarios)!==0){
        document.querySelector("#mayor-salario").textContent = devolverMayor(salarios);
        document.querySelector("#menor-salario").textContent = devolverMenor(salarios);
        document.querySelector("#salario-promedio").textContent = calcularPromedio(salarios);
        document.querySelector("#salario-mensual-promedio").textContent = calcularPromedioMensual(salarios);
        $mensaje.classList.toggle("oculto");
        $botonCalcular.classList.toggle("oculto");
    } else {
        alert("No ingresaste todos los salarios")
    }

    return false;
}

