function probarValidarNombre() {

  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter.',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre(
        '1111111111111111') === "Este campo debe tener solo letras",    'Validar nombre no validó que el nombre tenga solo letras',
);

  console.assert(
    validarNombre("Iara") === "",
    "Validar nombre no funcionó con un nombre válido"
  )

}

function probarValidarCiudad(){
console.assert(
    validarCiudad("") === "Debés seleccionar una provincia.", 
    "Validar provincia no validó que la provincia no sea un campo vacío."
    )

console.assert(
    validarCiudad("Chubut")=== "", 
    "La función validar provincia no funcionó con una opción correcta."
    )
}

function probarValidarDescripcion(){
    console.assert(
    validarDescripcion("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit libero repellendus dolore, quia deserunt earum ullam facere, odit minus, amet nostrum commodi ipsam? Numquam, quae dolor dolore iure velit deserunt ipsa nulla laboriosam voluptatum aperiam officia consequatur corporis dolores! Quas nobis provident doloremque iusto asperiores minima vitae corrupti harum esse non, alias in cumque? Id odit inventore, amet modi ratione maiores") === "Tu descripción no debe contener más que 100 carácteres.", "Validar descripcion regalo no validó que la descripción tenga menos de 100 carácteres."
    )

    console.assert(
        validarDescripcion("") === "No ingresaste tu pedido.", "Validar descripción no valido que el campo no esté vacío."
    )

    console.assert(
        validarDescripcion("%%%%&&adjbAAajb22") === "Tu pedido debe contener solo números y letras", "Validar descripción no valido que esta solo tenga números y letras"
    )

    console.assert(
        validarDescripcion("auto") === "", "Validar descripción no funcionó con contenido válido." 
    )
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();
