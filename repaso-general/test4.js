// funciones flecha asignadas a constantes
const notificacionNombre = (persona) => {
    try {
        console.log(`Se ha creado una nueva persona llamada ${persona.nombre} con género ${persona.genero}`)
    } catch (error) {
        console.log(error)
    }
}

const notificacionEdad = (persona) => {
    console.log(`Se ha creado una nueva persona de ${persona.edad} años`)
}


// funcion creadora con callback
function crearPersona(nombre, edad, genero, callback) {
    this.nombre = nombre
    this.edad = edad
    this.genero = genero
    callback(null)
}

const ana = new crearPersona("Ana", 23, "f", notificacionNombre)
const raul = new crearPersona("Raúl", 19, "m", notificacionEdad)

console.log({ ana })
console.log({ raul })



