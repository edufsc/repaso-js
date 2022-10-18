// funcion reducida al minimo
function esPar(numero) {
    return (numero % 2 === 0)
}

const pi = 3.14

if (esPar(3.14)) {
    console.log("es par")
} else {
    console.log("es impar")
}

let n2 = esPar(3);

// podemos loggear las variables dentro de objetos, el navegador mostrará el nombre de la variable junto al valor
console.log({ n2 })