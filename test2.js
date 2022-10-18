// funcion reducida al minimo
function esPar(numero) {
    return (numero % 2 === 0)
}

let lista = [14, 2, 13, 9, 5, 6]

console.log({ lista })

// utilizamos la funcion dentro de bucles

// for (let i = 0; i < lista.length; i++) {
//     let numero = lista[i];
//     console.log("Iteracion: " + i, " es par?", numero)
//     let numeroPar = esPar(numero)
//     console.log(numeroPar)
// }

let i = 0;
while (i < lista.length) {
    let numero = lista[i];
    let numeroPar = esPar(numero)
    console.log(`Iteracion: ${i} Numero: ${numero} Es par: ${numeroPar}`)
    i++;
}