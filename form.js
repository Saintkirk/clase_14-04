document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    let inputs = document.querySelectorAll('#formulario input', "#formulario textarea");
    let edad = document.querySelector("input[type='number']").value;
    let email = document.querySelector("input[type='email']").value;

    let valido = true;
    let mensaje = "";

    //validar campos vacios
    inputs.forEach(function (input){
        if(input.value.trim() === ""){
            valido = false;
            mensaje = "Todos los campos deben ser completados"
        }
    })

    //validar edad minima
    if (edad < 18) {
        valido = false;
        mensaje = "Debes tener al menos 18 años";
    }

    //validar email
    if (!email.includes("@") || !email.includes(".")) {
        valido = false;
        mensaje = "correo no válido";
    }


    if (valido) {
        window.location.href = "valido.html";
    } else {
        alert(mensaje);
    }
})





// if (edad < 18) {
//     console.log("es menor de edad");
// }else {
//     console.log("es mayor de edad");
// 