function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if (username === 'Juan1' && password === 'Juan2') {
        window.location.href = "principal.html"; // Simula acceso a la página principal
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
}
