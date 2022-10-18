// objetos
let persona = {
    nombre: "Ana",
    edad: 23,
    genero: "f"
}

let persona2 = {
    nombre: "Juan",
    edad: 20,
    genero: "m"
}

let persona3 = {
    nombre: "Jorge",
    edad: 20,
}

// array de objetos
let personas = [persona, persona2, persona3]

console.log({ personas })

// bucle for con un switch que se ejecuta en cada iteracion
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre)
    switch (personas[i].genero) {
        case "m": console.log("Estás registrado como hombre");
            break;
        case "f": console.log("Estás registrada como mujer");
            break;
        default: console.log("No se ha definido un género al registrarte");
            break;
    }
}
