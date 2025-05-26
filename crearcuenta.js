function crear() {
    const nombre_completo = document.getElementById('nombre_completo').value;
    const username_crear = document.getElementById('username_crear').value;
    const correo = document.getElementById('correo').value;
    const password_crear = document.getElementById('password_crear').value;
    const errorMsg = document.getElementById('error-message');


    if (nombre_completo != null && username_crear != null && correo != null && password_crear != null ) {
        alert(`Nuevo Usuario: ${correo}  //  Contraseña : ${password_crear}`);
        window.location.href = "principal.html"; // Simula acceso a la página principal
    } else {
        errorMsg.textContent = "No llenaste todas las casillas";
    }
}