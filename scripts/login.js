document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Buscar el usuario en la lista
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Si las credenciales son correctas, redirigir al usuario
            alert(`Bienvenido, ${user.username}!`);
            window.location.href = "./sites/main.html"; // Redirige al sitio principal
        } else {
            // Si las credenciales son incorrectas, mostrar un mensaje de error
            alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        }
    });
});