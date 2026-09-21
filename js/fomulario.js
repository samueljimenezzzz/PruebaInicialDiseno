var formulario = document.getElementById("formPedido");

formulario.onsubmit = function () {

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var aviso = document.getElementById("aviso").checked;

    if (nombre == "" || email == "" || telefono == "") {
        alert("Tienes que rellenar el nombre, el correo y el telefono.");
        return false;
    }

    if (aviso == false) {
        alert("Tienes que aceptar el aviso legal.");
        return false;
    }

    alert("Gracias " + nombre + ", hemos recibido tu pedido.");
    return false;
}
