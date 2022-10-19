// documento listo
$(() => {
    console.log("Document ready!")
    // escuchar evento click en botón
    $("#send-btn").on("click", () => {
        // valor del input en el momento de hacer click
        let nombre = $("#name").val();
        // añadir un párrafo con el valor introducido
        $("#container").append('<p class="sent-text">' + nombre + '</p>');
        // si pasamos un parámetro a la función val(), modificamos el valor del input (en este caso lo vaciamos)
        $("#name").val("");
    })
})

// Hemos reemplazado $(document).ready(()=>{...}) por $(() => {...})
// y .click(() => {...}) por .on("click",() => {...})
// El siguiente código es recomendado solo hasta jQuery 1.7
// y deja de considerarse válido a partir de jQuery 3.0, aunque por compatibilidad, todavía se soporta.

// $(document).ready(() => {
//     console.log("Document ready!")
//     // escuchar evento click en botón
//     $("#test-button").click(() => {
//         // valor del input en el momento de hacer click
//         let nombre = $("#nombre").val();
//         // añadir un párrafo con el valor introducido
//         $("#container").append("<p>" + nombre + "</p>");
//     })
// })