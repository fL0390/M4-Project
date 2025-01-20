document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const messageContainer = document.querySelector(".incorrect");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            messageContainer.style.display = 'none'
            window.location.href = "./sites/main.html"; 
        } else {
            messageContainer.style.display = 'block'; 
        }
    });
});

const form = document.getElementById('login-form');
        const errorMessage = document.getElementById('error-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
                alert(`Welcome, ${username}!`);
            }
        });